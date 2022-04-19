const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser : true
        });
        console.log(`MongoDB CONNECTED: ${conn.connection.host}`.cyan.underline.bold);
    } catch(err){
        console.log(`ERROR:${err.message}`.red)
        process.exit(1);
    }
}

module.exports = connectDB;