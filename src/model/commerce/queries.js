const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLInt } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Commerce = require("./commerce")
// const { GraphQLInt } = require('graphql/type')

// Defines the queries
module.exports = {
    products: {
        type: new GraphQLList(type),
        args: {
            id: {
                type: GraphQLID
            },
            name: {
                type: GraphQLString
            },
            price: {
                type: GraphQLInt
            },
            img: {
                type: GraphQLString
            }
        },
        resolve: Commerce.findMatching.bind(Commerce)
    },
    product: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Commerce.getByID.bind(Commerce)
    }
}