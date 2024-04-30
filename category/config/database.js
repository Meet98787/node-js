const mongoose = require('mongoose');

const db = async () => {
    await mongoose.connect(
        "mongodb://127.0.0.1:27017/calegory"
    );
    console.log("database connected.");
}

module.exports = db;