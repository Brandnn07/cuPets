const router = require('express').Router();
const { Post, User} = require('../models');
const withAuth = require('../utils/auth');


// Gets info from posts onto dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        const dashboardData = await Post.findAll({
            include: [
                {
                    attributes: ['title', 'post_content', 'date_created'] ,
                },
            ],
        });
        const posts = dashboardData.map((post) => 
            post.get({ plain: true})
        );

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// Paths to settings
router.get('/settings', withAuth, async (req, res) => {
    
})

module.exports = router;