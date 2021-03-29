[
    {
        "name": "Martin Bevil",
        "email": "magicianmarty@hotmail.com",
        "password": "testpassword4",
        "user_name": "marty_the_great",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "pet_name": "Sparky the Magestic",
        "pet_type": "is small and furry",
        "pet_interest": "is small and furry"
    },
    {
        "name": "Helen Shackleford",
        "email": "amazinghelen10@holy.com",
        "password": "testpassword5",
        "user_name": "holy_helen34",
        "description":"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "pet_name": "Swiss Cheese",
        "pet_type": "meows",
        "pet_interest": "meows"
    },
    {
        "name": "Sally Starling",
        "email": "numberlover91@aol.com",
        "password": "testpassword6",
        "user_name": "super_saver_sally",
        "description":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "pet_name": "Buster",
        "pet_type": "barks",
        "pet_interest": "fly"
    }
]

const { Profile } = require('../models');

const profileData = [
  {
      name: "Martin Bevil",
      email: "magicianmarty@hotmail.com",
      password: "testpassword4",
      user_name: "marty_the_great",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      pet_name: "Sparky the Magestic",
      pet_type: "is small and furry",
      pet_interest: "is small and furry"
  },
  {
      name: "Helen Shackleford",
      email: "amazinghelen10@holy.com",
      password: "testpassword5",
      user_name: "holy_helen34",
      description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      pet_name: "Swiss Cheese",
      pet_type: "meows",
      pet_interest: "meows"
  },
  {
      name: "Sally Starling",
      email: "numberlover91@aol.com",
      password: "testpassword6",
      user_name: "super_saver_sally",
      description:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      pet_name: "Buster",
      pet_type: "barks",
      pet_interest: "fly"
  }
];

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;