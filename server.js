const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const server = express();
const corsOptions = {};

server.use(helmet());
server.use(express.json());
server.use(cors());

mongoose
  .connect('mongodb://localhost/lambda-notes')
  .then(conn => {
    console.log('connected to mongo');
  })
  .catch(err => {
    console.log('error connecting to mongo');
  });

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on ${port}`));
