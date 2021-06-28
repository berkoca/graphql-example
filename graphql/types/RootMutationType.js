const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const author = require('../../models/author');
const book = require('../../models/book');

const RootMutationType = new GraphQLObjectType({
    name: "Mutations",
    description: "Root Mutation",
    fields: () => ({
        addBook: {
            type: require('../types/BookType'),
            description: "Add a book.",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                authorId: { type: GraphQLNonNull(GraphQLInt) }
            },
            resolve: async (parent, args) => {
                return await book.create({ name: args.name, authorId: args.authorId });
            }
        },
        addAuthor: {
            type: require('../types/AuthorType'),
            description: "Add an author.",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: async (parent, args) => {
                return await author.create({ name: args.name });
            }
        }
    })
});

module.exports = RootMutationType;