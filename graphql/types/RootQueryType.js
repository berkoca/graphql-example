const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');
const author = require('../../models/author');
const book = require('../../models/book');
const getQueryFields = require('../utils/getQueryFields');

const RootQueryType = new GraphQLObjectType({
    name: "Query",
    description: "Root Query",
    fields: () => ({
        book: {
            type: require('./BookType'),
            description: "A single book.",
            args: {
                id: { type: GraphQLInt }
            },
            resolve: async (parent, args, context, info) => await book.findOne({ where: { id: args.id } })
        },
        books: {
            type: new GraphQLList(require('./BookType')),
            description: "List of all books.",
            resolve: async (parent, args, context, info) => await book.findAll({ attributes: getQueryFields(info, ["author"], ["authorId"]) })
        },
        author: {
            type: require('../types/AuthorType'),
            description: "A single author.",
            args: {
                id: { type: GraphQLInt }
            },
            resolve: async (parent, args, context, info) => await author.findOne({ where: { id: args.id } })
        },
        authors: {
            type: new GraphQLList(require('../types/AuthorType')),
            description: "List of all authors.",
            resolve: async (parent, args, context, info) =>  await author.findAll({ attributes: getQueryFields(info, ["books"]) })
        }
    })
});

module.exports = RootQueryType;