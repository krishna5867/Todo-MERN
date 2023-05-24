const mongoose = require('mongoose')

const connectDB = () => {
    mongoose
    .connect(process.env.mongo_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true

    }).then((conn)=> {
        console.log(`DataBase is connected at ${conn.connection.host}`);
    }).catch((err)=> {
        console.log(err);
    })
}

module.exports = connectDB;