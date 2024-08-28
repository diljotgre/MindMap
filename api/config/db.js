const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.createConnection(process.env.MONGO).on('open',()=>{
    console.log('mongodb connected');
});


module.exports = connection;