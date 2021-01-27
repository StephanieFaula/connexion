const express = require('express');
const userController = require('./controllers/userController');

let Router = express.Router();

// Création des routes
Router.route('/user/login/').post(userController.login);
Router.route('/user/logout/').post(userController.logout);
Router.route('/user/profil/').get(userController.getUserProfil);
Router.route('/user/register/').post(userController.register);



module.exports = Router;