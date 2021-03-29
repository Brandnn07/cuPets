const seedProfiles = require('./profileSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedProfiles();
  console.log('\n----- PROFILES SEEDED -----\n');

  process.exit(0);
};

seedAll();