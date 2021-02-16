const { GraphQLObjectType } = require('graphql')
const commerceQueries = require('../model/commerce/queries')

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        product: commerceQueries.product,
        products: commerceQueries.products
    }
})