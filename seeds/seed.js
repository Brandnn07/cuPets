const sequelize = require('../config/connection');
const { User, Profile } = require('../models');

const userSeeds = require('./userSeeds.json');
const profileSeeds = require('./profileSeeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeeds, {
        individualHooks: true,
        returning: true,
    });

    for (const profile of profileSeeds) {
        await Profile.create({
            ...profile,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();