const { graphqlHTTP } = require('express-graphql');
const GraphQLRouter = require('express').Router();
const schema = require('../graphql/schema');

GraphQLRouter.use('/', graphqlHTTP({
   schema: schema,
   graphiql: true
}));

module.exports = GraphQLRouter;