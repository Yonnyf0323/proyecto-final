//mongodb+srv://yonnyf0323:12345@cluster0.ggwenym.mongodb.net/Pokemon
import express from "express"
import router from "./routes/routes.js"
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()
const mongoURI = process.env.DB_URL

mongoose.connect(mongoURI)
const db = mongoose.connection;

db.on('error',(error)=>{
    console.log(error + "Algo anda mal")
})

db.once('connected', ()=>{
    console.log('Conexion con la base de datos exitosa 🚀')
})
const app =express()
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.listen(3000)
app.use(router)

console.log("sevidor funcionando")