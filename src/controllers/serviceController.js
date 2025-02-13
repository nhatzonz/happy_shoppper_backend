const Service = require('../models/Service');


const getAllService = async (req, res) => {
    try {
        const serviceList = await Service.findAll();
        res.status(200).json(serviceList);
    } catch (err) {
        console.error('Error fetching service list:', err);
        res.status(500).json({ message: 'Error fetching service list' });
    }
};
const addService = async (req,res) =>{
    const {name, description} =req.body;
    try{
        if(!name||!description){
            return res.status(400).json({message:'info service not full'});
        }
        const ErrorService = await Service.findOne({where: {name}});
        if(ErrorService){
            return res.status(400).json({ message: 'Service with this code already exists!' });
        }
        const newService = await Service.create({           
            name,
            description
        })
        return res.status(201).json({message:'add service successful',service:newService})
    }
    catch(error){
        console.error('Error adding service:', error);
        return res.status(500).json({ message: 'Server error, unable to add service', error: error.message });
    }
}

const deleteServiceById = async (req , res) =>{
    const {id} = req.params;

    try {
        const service = await Service.findByPk(id)
        if(!service){
            return res.status(404).json({message:'Service not found!'})
        }
        await service.destroy()
        return res.json({message:'Success'})
    }
    catch(error){
        console.error('Error deleting service',error);
        res.status(500).json({message: "Server error", error: error.message })
        
    }
}

const updateServiceById = async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    
    const {name,description} = req.body;
    try {
        const service  = await Service.findByPk(id);
        if(!service){
            return res.status(404).json({message:'Service not found!'})
        }
        service.name = name ||service.name
        service.description = description||service.description

        await service.save()
        res.status(200).json({message:'update success !'});

    }
    catch(error){
        console.error('Error updating service',error);
        res.status(500).json({message: "Server error", error: error.message })
        
    }
}
module.exports = { getAllService,addService,updateServiceById,deleteServiceById};
