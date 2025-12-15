import express from 'express'
import connectDB from './config/database.js'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import itemRoutes from './routes/router.js'

const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/items', itemRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server start http://localhost:${PORT}`)
})


connectDB()