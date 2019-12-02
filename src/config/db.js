const mongoose = require("mongoose")

const mongodbUri = "mongodb://localhost:27017/store"

const db = mongoose
  .connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

module.exports = db