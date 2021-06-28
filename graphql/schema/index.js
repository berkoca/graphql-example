const { GraphQLSchema } = require('graphql');
const RootMutationType = require('../types/RootMutationType');
const RootQueryType = require('../types/RootQueryType');

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
});

module.exports = schema;