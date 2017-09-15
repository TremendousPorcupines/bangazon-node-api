'use strict';

const faker = require('faker');

module.exports.generateTrainingPrograms = () => {
  let training_programs = [];

  for (let i = 0; i < 20; i++) {
    let name = faker.company.bs();
    let start_date = faker.date.past();
    let end_date = faker.date.recent();
    let number_enrolled = Math.floor(Math.random() * 25) + 1;

    training_programs.push({
      "name": name,
      "start_date": start_date,
      "end_date": end_date,
      "number_enrolled": number_enrolled
    });
  }

  return training_programs;
};
