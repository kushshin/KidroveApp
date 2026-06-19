import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import enquiryRouter from './EnquiryRoute.js'
const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',enquiryRouter)

const DBconnection = async ()=> {
 try {
    await mongoose.connect(process.env.MONGO_DB)
    console.log('DB connected')
} catch (error) {
    console.log('DB not connected')
 }
}

DBconnection()



app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`)
})