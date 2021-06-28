const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');
const author = require('../../models/author');

const BookType = new GraphQLObjectType({
    name: "Book",
    description: "The book written by an author.",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        authorId: { type: GraphQLNonNull(GraphQLInt) },
        author: {
            type: require('../types/AuthorType'),
            resolve: async (book) => {
                return await author.findOne({ where: { id: book.authorId } });
            }
        }
    })
});

module.exports = BookType;