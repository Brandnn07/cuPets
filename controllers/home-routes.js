const router = require('express').Router();
const { Post, Profile } = require('../models');
const withAuth = require('../utils/auth');


// Gets info from posts onto dashboard
router.get('/', withAuth, async (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/home');
        return;
    }

    res.render('login');
});

router.get('/login', async (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/home');
        return;
    }
    res.render('login');
});
// Paths to settings
router.get('/settings', async (req, res) => {
    const profileData = await Profile.findOne({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('settings', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
});

router.get('/home', async (req, res) => {
    const profileData = await Profile.findAll({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('home', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
});

router.get('/profile', async (req, res) => {
    const profileData = await Profile.findOne({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('profile', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
})

router.get('/inbox', async (req, res) => {
    const profileData = await Profile.findOne({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('inbox', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
})

router.get('/signup', async (req, res) => {
    const profileData = await Profile.findOne({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('signup', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
});

router.get('/feedback', async (req, res) => {
    const profileData = await Profile.findOne({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('feedback', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
});

router.get('/aboutus', async (req, res) => {
    const profileData = await Profile.findOne({
        where: {
            id: req.session.profile_id
        }
    });

    const userProfile = JSON.parse(JSON.stringify(profileData));

    res.render('aboutus', {
        loggedIn: req.session.loggedIn,
        userProfile
    });
});

module.exports = router;