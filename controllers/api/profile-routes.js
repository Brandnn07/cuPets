const router = require('express').Router();
const { User, Post } = require('../../models');
const Profile = require('../../models/Profile');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        
        // const stringifyBody = JSON.parse(JSON.stringify(req.body));
        // console.log(stringifyBody + " hitting this route");
        console.log(req.body);
        const newProfile = await Profile.create(req.body);
        
        
        console.log(newProfile, '***');
        req.session.save(() => {
            req.session.user_id = newProfile.id;
            req.session.loggedIn = true;

            res.status(200).json(newProfile);
        })
        
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
                user_id: req.session.user_id,
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

module.exports = router;

