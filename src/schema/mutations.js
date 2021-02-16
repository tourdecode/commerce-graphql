const { GraphQLObjectType } = require('graphql')
const commerceMutation = require('../model/commerce/mutations')

module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        // addCommerce: commerceMutation.addCommerce,
        // updateCommerce: commerceMutation.updateCommerce,
        addOrderShop: commerceMutation.addOrderShop,
        addOrderList: commerceMutation.addOrderList,
        // addToCart: commerceMutation.addToCart
    }
})