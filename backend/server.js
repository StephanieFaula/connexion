const express = require('express');
const morgan = require('morgan');
const Router = require('./router');

require('./models/database.js')

require('dotenv').config();
const port = process.env.PORT || 3001;
const rootAPI = process.env.ROOT_API;

const app = express();

// Middleware pour avoir des info sur la route
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }))

app.use(express.urlencoded({extended: true}));

// app.use(rootAPI, )
app.use(rootAPI, Router);

app.listen(3001, () => { console.log(`started on port ${port}`)})