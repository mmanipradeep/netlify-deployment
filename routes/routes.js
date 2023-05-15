const express = require('express');
const router = express.Router()
const Model = require('../models/model');
module.exports = router;

// Post method - req and res is callback
router.post('/post' ,async  (req,res) => {
	//res.send('Post API')
	const data = new Model({
		fullName: req.body.fullName,
		adhaarNumber : req.body.adhaarNumber,
		dateOfBirth : req.body.dateOfBirth
	})
	try{
		const dataToSave =data.save();
	    res.status(200).json(dataToSave)
	}catch(error){
		res.status(400).json({message: error.message})
	}
})

//Get all method
router.get('/getAll',async (req,res) => {
	//res.send('Get aLL API')
	try{
		const data = await Model.find();
		res.json(data)
	}catch(error){
		res.status(500).json({message:error.message})
	}
})

//Get by ID method
router.get('/getOne/:id',async(req,res) => {
	//res.send(req.params.id)
	try{
		const data = await Model.findById(req.params.id);
		res.json(data)
	}catch(error){
		res.status(500).json({message:error.message})
	}
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;