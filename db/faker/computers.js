'use strict';

const faker = require('faker');

module.exports.generateComputers = () => {
  let computers = [];
  let begin_service_date;
  let end_service_date;

  for (let i = 0; i < 40; i++) {
    if (i+1 < 25) {
    begin_service_date = faker.date.past();
    end_service_date = faker.date.future();
  } else {
    begin_service_date = faker.date.past();
    end_service_date = faker.date.recent();
  }
    computers.push({
      begin_service_date,
      end_service_date
    });
  }
  return computers;
};