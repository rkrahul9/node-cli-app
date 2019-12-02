import mongoose from 'mongoose'

const storeSchema = new mongoose.Schema({
  key: String,
  value: String
 },{ timestamps: true })

const Store = mongoose.model('Store', storeSchema)

export default Store