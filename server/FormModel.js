import mongoose from 'mongoose'


const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
})

const EnquiryModel = mongoose.model('Enquiry',studentSchema)

export default EnquiryModel