import { Schema, model } from 'mongoose'

const Tablet = new Schema({
    username: String,
})

export default model("products", Tablet)