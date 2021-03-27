const router = require('express').Router();
const { Post, Profile} = require('../models');
const withAuth = require('../utils/auth');


// Gets info from posts onto dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const dashboardData = await Post.findAll({
            include: [
                {
                    model: Profile,
                    attributes: ['title', 'post_content', 'date_created'] ,
                },
            ],
        });
        const posts = dashboardData.map((post) => 
            post.get({ plain: true})
        );
        res.render('profile', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if(req.session.loggedIn) {
       return res.redirect('/');
    }
    res.render('login');
});
// Paths to settings
router.get('/settings', withAuth, async (req, res) => {
    
});

router.get('/profile', async (req, res) => {
    res.render('profile');
})

router.get('/signup', async (req, res) => {
    res.render('signup');
});

module.exports = router;