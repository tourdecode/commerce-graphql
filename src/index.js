const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Routes = require('./routes')

class App {

    /**
     * 
     * 
     * Sets the properties to be used by this class to create the server
     * 
     */
    constructor() {
        this.expressApp = express()

        //Literal object containing the configurations
        this.configs = {
            get port() {
                // return process.env.PORT || 8080
                return 4444
            }
        }
    }

    applyCors(){
        this.expressApp.use(cors())
    }

    /**
     * 
     * 
     * Applies any middleware to be used by this app
     * 
     */
    applyMiddleware() {
        //Allows the server to parse json
        this.expressApp.use(bodyParser.json())

        //Registers the routes used by the app
        new Routes(this.expressApp)
    }

    /**
     * 
     * 
     * Runs the app
     * 
     */
    run() {
        this.expressApp.listen(this.configs.port, () => {
            console.log("Express server running project on port " + this.configs.port + ".")
            console.log(`Environment: ${process.env.STAGE || "development"}`)
        })
    }
}

//Runs the thing
const app = new App()
app.applyCors()
app.applyMiddleware()
app.run()
