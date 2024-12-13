import express from 'express'
import userRoute from './routes/user.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use('/api', userRoute)

app.get('/', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Your welcome to this app"
        }
    )
})
app.get('/health', (req, res)=>{
    res.status(200).json(
        {
            "message" : "Health route"
        }
    )
})

app.listen(PORT, ()=>{
    console.log(`Server is running : http://localhost:${PORT}`)
})