const mongoose = require('mongoose')

const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONG0_URL)
    console.log(`MongoDB Conntect: ${conn.connection.host}`)
}

module.exports = connectDB