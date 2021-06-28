require('dotenv').config({ path: '.env' });

const express = require('express');
const sequelize = require('./database');

const author = require('./models/author');
const book = require('./models/book');

const GraphQLRouter = require('./routes/GraphQLRouter');

const app = express();

// Relations
book.belongsTo(author);
author.hasMany(book);

// Database initialization
sequelize.sync();

// Routes
app.use('/graphql', GraphQLRouter);

app.listen(3000, () => console.log('Running a GraphQL API Server at http://localhost:3000/graphql'));