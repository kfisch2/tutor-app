const db = require('../config/connection');
const { Tutor } = require('../models');
const tutorSeeds = require('./tutorSeeds.json');

db.once('open', async () => {
  try {
    await Tutor.deleteMany({});
    await Tutor.create(tutorSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
