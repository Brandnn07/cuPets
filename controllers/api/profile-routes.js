const router = require('express').Router();
// const { Post } = require('../../models');
const { Profile } = require('../../models');
const Message = require('../../models/message');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newProfile = await Profile.create({
            name: req.body.name,
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password,
            description: req.body.description,
            pet_name: req.body.pet_name,
            pet_type: req.body.pet_type,
            pet_interest: req.body.pet_interest,
            pet_url: `/assets/${req.body.pet_type}/${Math.floor((Math.random() * 3) + 1)}.jpg`
        });

        req.session.save(() => {
            req.session.profile_id = newProfile.id;
            req.session.loggedIn = true;

            res.status(200).json(req.body);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/message', async (req, res) => {
    console.log(req.body);
    try {
        const userInfo = await Profile.findByPk(req.session.profile_id)
        console.log(userInfo);
        const newMessage = await Message.create({
            content: req.body.message,
            user_name: req.body.user_name,
            from: userInfo.dataValues.user_name
        })
        res.sendStatus(200);
    }catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {

        const profileData = await Profile.findOne({ where: { user_name: req.body.user_name } });
        console.log(req.body.user_name)

        if (!profileData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }

        const validPassword = await profileData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        console.log(profileData)
        console.log(validPassword)

        req.session.save(() => {
            req.session.profile_id = profileData.id;
            req.session.loggedIn = true;

            res.json({ profile: profileData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// router.get('/one', withAuth, async (req, res) => {
//     try {
//         const profileData = await Profile.findOne({
//             where: {
//                 id: req.session.profile_id
//             }
//         });

//         const userProfile = JSON.parse(JSON.stringify(profileData));

//         res.status(200).json(userProfile);

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const profileData = await Profile.destroy({
            where: {
                id: req.params.id,
                profile_id: req.session.profile_id,
            },
        });

        if (!profileData) {
            res.status(404).json({ message: 'No profile found with this id' });
            return;
        }

        res.status(200).json(profileData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

