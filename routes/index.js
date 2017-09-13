`use strict`;

const {Router} = require('express');
const Router = Router();

const customers = require('./users-route');

router.get('/', (req, res) => {
  res.json({
    "user": "api/v1/user",
    "users": "api/v1/users"
  });
});

module.exports = router