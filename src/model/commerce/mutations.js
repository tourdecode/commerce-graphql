const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./type')
const Commerce = require('./commerce')

// Defines the mutations
module.exports = {
    // addCommerce: {
    //     type,
    //     args: {
    //         name:   { type: new GraphQLNonNull(GraphQLString) },
    //         price:  { type: new GraphQLNonNull(GraphQLFloat) },
    //         img:  { type: new GraphQLNonNull(GraphQLString) },
    //     },
    //     resolve: Commerce.createEntry.bind(Commerce)
    // },
    addOrderShop: {
        type,
        args: {
            subtotal:  { type: new GraphQLNonNull(GraphQLFloat) },
            vat:  { type: new GraphQLNonNull(GraphQLFloat) },
            total:  { type: new GraphQLNonNull(GraphQLFloat) },
        },
        resolve: Commerce.createOrderShop.bind(Commerce)
    },
    addOrderList: {
        type,
        args: {
            pid:   { type: GraphQLID },
            qty:   { type: new GraphQLNonNull(GraphQLInt) },
            price:  { type: new GraphQLNonNull(GraphQLFloat) },
            order_id:  { type: GraphQLID },
            vat:  { type: new GraphQLNonNull(GraphQLFloat) },
        },
        resolve: Commerce.createOrderList.bind(Commerce)
    },
    // addToCart: {
    //     type,
    //     args: {
    //         pid:   { type: GraphQLID },
    //     },
    //     resolve: Commerce.createCart.bind(Commerce)
    // },
    // updateCommerce: {
    //     type,
    //     args: {
    //         id:     { type: GraphQLID },
    //         name:   { type:new GraphQLNonNull(GraphQLString) },
    //         price:  { type: new GraphQLNonNull(GraphQLFloat) },
    //         img:  { type: new GraphQLNonNull(GraphQLString) },
    //     },
    //     resolve: Commerce.updateEntry.bind(Commerce)
    // }
}
