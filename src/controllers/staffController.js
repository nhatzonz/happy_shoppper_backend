const { Staff } = require('../models'); 

const getAllStaff= async (req, res) => {
    try {
        const staffs = await Staff.findAll(); 
        res.status(200).json(staffs); 
    } catch (error) {
        console.error('Error fetching staffs:', error);
        res.status(500).json({ message: 'Server error, unable to fetch staffs' });
    }
};

const addStaff = async (req,res) =>{
    const {staff_code, name, email,phone,position} =req.body;
    try{
        if(!staff_code||!name||!email||!phone||!position){
            return res.status(400).json({message:'info staff not full'});
        }
        const ErrorStaff = await Staff.findOne({where: {staff_code}});
        if(ErrorStaff){
            return res.status(400).json({ message: 'Staff with this code already exists!' });
        }
        const newStaff = await Staff.create({
            staff_code,
            name,
            email,
            phone,
            position
        })
        return res.status(201).json({message:'add staff successful',staff:newStaff})
    }
    catch(error){
        console.error('Error adding staff:', error);
        return res.status(500).json({ message: 'Server error, unable to add staff', error: error.message });
    }
}

const deleteStaffByCode = async (req , res) =>{
    const {staffCode} = req.params;

    try {
        const staff = await Staff.findByPk(staffCode);
        if(!staff){
            return res.json({message:'staff not found !'})
        }
        await staff.destroy();
        return res.json({message:'Success'});
    }
    catch(error){
        console.error('Error deleting staff',error);
        res.status(500).json({message: "Server error", error: error.message })
        
    }
}

const updatedStaffbyCode = async (req,res)=>{
    const {staffCode} = req.params;
    console.log(staffCode);
    
    const {name,email,phone,position} = req.body;
    try {
        const staff = await Staff.findByPk(staffCode);
        if(!staff){
            return res.status(404).json({message:'staff not found'});
        }

        staff.name = name || staff.name
        staff.email = email || staff.email
        staff.phone = phone || staff.phone
        staff.position = position || staff.position
        
        await staff.save()
        res.status(200).json({message:'update success !'});

    }
    catch(error){
        console.error('Error updating satff',error);
        res.status(500).json({message: "Server error", error: error.message })
        
    }
}
module.exports = {getAllStaff , deleteStaffByCode,updatedStaffbyCode, addStaff}