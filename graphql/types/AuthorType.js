const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');
const book = require('../../models/book');

const AuthorType = new GraphQLObjectType({
    name: "Author",
    description: "Author of a book.",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        books: {
            type: new GraphQLList(require('./BookType')),
            resolve: async (author) => {
                return await book.findAll({ where: { authorId: author.id } });
            }
        }
    })
});

module.exports = AuthorType;