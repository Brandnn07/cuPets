const router = require('express').Router();
const { Post } = require('../../models');
const Profile = require('../../models/Profile');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const newProfile = await Profile.create(req.body);
        
        
        console.log(newProfile, '***');
        req.session.save(() => {
            req.session.profile_id = newProfile.id;
            req.session.loggedIn = true;

            res.status(200).json(newProfile);
        })
        
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const profileData = await Profile.findOne({ where: { user_name: req.body.user_name } });

        if (!profileData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await profileData.checkPassword(req.body.passwpord);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or passwprd, please try again' });
            return;
        }

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

