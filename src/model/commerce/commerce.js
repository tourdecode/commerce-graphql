const DAO = require('../../lib/dao')
const mySQLWrapper = require('../../lib/mysqlWrapper')

class Commerce extends DAO {

    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'products'
    }

    static get TABLE_NAME_ORDER() {
        return 'order_shop'
    }

    static get TABLE_NAME_ORDER_LIST() {
        return 'order_list'
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByID(_, {id}) {
        return await this.find(id)
    }

    /**
     * Returns a list of commerce matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        // Returns early with all commerce if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching commerce
        return this.findByFields({
            fields
        })
    }


    /**
     * Creates a new commerce
     */
    static async createEntry(_, {type, price}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insert(connection, {
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    static async createOrderShop(_, {subtotal, vat, total}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insertOrderShop(connection, {
                data: {
                    subtotal,
                    vat,
                    total
                }
            })
            // console.log(_result.insertId);
            // return this.getByID(_, {id: _result.insertId})
            return {id: _result.insertId}
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    static async createOrderList(_, {pid, qty, price, order_id, vat}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insertOrderList(connection, {
                data: {
                    pid,
                    qty,
                    price,
                    order_id,
                    vat
                }
            })

            // return this.getByID(_, {id: _result.insertId})
            return {id: _result.insertId}
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    static async createCart(_, {pid}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {
            let _result = await this.insertCart(connection, {
                data: {
                    pid
                }
            })

            return this.getByID(_, {id: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }

    /**
     * Updates a bacon 
     */
    static async updateEntry(_, {id, type, price}) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id,
                data: {
                    type,
                    price
                }
            })

            return this.getByID(_, {id})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = Commerce