'use strict';

const faker = require('faker')

module.exports.generateUsers = () => {
  let users = [];

  for (let i = 0; i < 50; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let address = faker.address.streetAddress();
    let city = faker.address.city();
    let state = faker.address.state();
    let zipCode = faker.address.zipCode();
    let phone = faker.phone.phoneNumberFormat();
    let dateCreated = faker.date.past();
    let lastLogin = faker.date.recent();

    users.push({
      "firstName": firstName,
      "lastName": lastName,
      "address": address,
      "city": city,
      "state": state,
      "zipCode": zipCode,
      "phone": phone,
      "dateCreated": dateCreated,
      "lastLogin": lastLogin
    });
  }

  return users;
}