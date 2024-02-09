require("dotenv").config()

import express, { Application, Request, Response } from 'express'
// import mongoose from 'mongoose'

import accessories from '../public/api/accessories.json'
import phones from '../public/api/phones.json'
import products from '../public/api/products.json'
import tablets from '../public/api/tablets.json'

const app: Application = express()

// app.use(express.json())

// mongoose.connect(process.env.DB_URL as string)
// mongoose.connection.on('connected', () => console.log("Mongoose connected"))

app.get("/", (req: Request, res: Response) => {
    res.send("hello")
})

app.get("/accessories", (req: Request, res: Response) => {
    res.send(accessories)
})

app.get("/phones", (req: Request, res: Response) => {
    res.send(phones)
})

app.get("/products", (req: Request, res: Response) => {
    res.send(products)
})

app.get("/tablets", (req: Request, res: Response) => {
    res.send(tablets)
})

app.listen(process.env.PORT || 3000, () => console.log("Server started"))