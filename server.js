const dotenv=require("dotenv")
const express = require('express')
const bootcamps=require('./Routes/Bootcamp')
const app =express()
const logger=require("./Middleware/logger")
const connectDB=require("./config/db")
const colors = require('colors')




// load env var 
dotenv.config({ path: './config/config.env' })
app.use(express.json())



app.use(logger)




app.use("/api/v1/bootcamps", bootcamps)

// // / Connect MongoDB
connectDB()


// define PORT
const PORT = process.env.PORT || 6000




const server=app.listen(PORT,()=>{
     console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})

// handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {

    console.log(`Error: ${err.message}`.red)

    // close server & exit process
    server.close(() => process.exit(1))
})