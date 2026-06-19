import express from 'express';
import EnquiryModel from './FormModel.js';
const router = express.Router()


router.post('/enquiry', async (req, res) => {
    // console.log(req.body)
    try {
        const { name, email,phone } = req.body
        const user = await EnquiryModel.findOne({ name: name })
        if (user) res.status(401).json("user already exists")

        const newUser = new EnquiryModel({
            name: name,
            email: email,
            phone : phone
        })
        await newUser.save()
        res.status(200).json("data submitted successfully")
    } catch (error) {
        res.status(401).json("data submission failed")
    }
})

export default router