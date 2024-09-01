const mongoose = require ("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(`Error will connecting to DB $ {error}`)
    }
}

module.exports = connectDB;