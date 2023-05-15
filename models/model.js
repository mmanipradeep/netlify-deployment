const mongoose = require('mongoose');
const joi = require("joi");
const PersonSchema =new mongoose.Schema({
	fullName: { type: String, required: [true , "Please enter name" ]},
	adhaarNumber:{required : true,type: Number},
	dateOfBirth: { type: Date, required: true}
})


module.exports = mongoose.model('Data', PersonSchema)