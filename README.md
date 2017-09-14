# bangazon-node-api

### Application Dependencies:
You will need to run `$ npm install` in your terminal to install the following dependencies -

*Dependencies:*
  sqlite3
  express
  body-parser
  dotenv

*Dev Dependencies:*
  mocha
  chai
  chai-http
  faker
  morgan

### Database:
  To instantiate a new database you will need to run `$ npm run db:reset` in your terminal.

##### Populate Database:
The following should be run in numerical order to account for data dependencies.
  1. Users - run `$ npm run db:users` in your terminal.