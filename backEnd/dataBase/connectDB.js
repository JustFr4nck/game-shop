
const mongoose = require('mongoose');

const connectDB = async (MONGO_URL) => {

    try {
        await mongoose.connect(MONGO_URL);
        console.log("Database is connected succesfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;