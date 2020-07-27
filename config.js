const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('useFindAndModify', false);
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("MongoDB Connected !!!")
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectMongoDB;