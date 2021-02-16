let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInt
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Commerce',
    description: 'A Commerce',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        price: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        img: {
            type: new GraphQLNonNull(GraphQLString)
        },
        pid: {
            type: new GraphQLNonNull(GraphQLID)
        },
        mid: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        qty: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        subtotal: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        vat: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        total: {
            type: new GraphQLNonNull(GraphQLFloat)
        },
        order_id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        limit: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        offset: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    }
})