import express from 'express'

const router = express.Router()


router.get("/user", (req, res)=>{
   
    const user = {
        "name" : "Abhishek Gupta",
        "email" : "technoabhishekgupta@gmail.com",
        "gender" : "male",
        "phone" : "9598986151"
    }

    res.status(200).json({
        "message" : "User found successfully",
        user
    })
})

export default router