'use strict';

const User = require('./models/user');

User.findByPk(1)
    .then((User) => console.log(User))