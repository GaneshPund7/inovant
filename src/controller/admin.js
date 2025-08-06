 const {models} = require("../config");
 
async function getAdmin (req, res){
    try{
        const admin = await models.Admin.findAll();
        
     res.status(200).json({message:"Admin found Successfully", result :admin});
    }catch(error){
        res.status(404).json({Message: "Somthing wnet wrong", error: error})
    }
}

async function addAdmin(req, res){
    const { adminName, email, mobile, address, password} = req.body;
    try{
        if(!adminName || !email || !mobile || !address || !password){
            res.status(401).json(" All fields are required")
        }
        const addAdmin = await models.Admin.create({
            adminName, email, mobile, address, password 
        })
        res.status(200).json({message: "Admin created successfuly", result: addAdmin});
    }catch(error){

        res.status(404).json({message: "Somthing went wrong", error: error})
    }
}

async function updateAdmin ( req, res){
    const { id } = req.params;
 
    try{         
     const updated = await models.Admin.update(req.body, {
      where: { id: id },
    });
    if(!updated){
        return res.status(404).json({message: "Admin not found"});
    }
         res.status(200).json({message: "Admin updated successfuly", result: updated})
    }catch(error){
        
        res.status(404).json({message: "Somthing went wrong", error: error})
    }
}

async function deleteAdmin(req, res){
    const { id } = req.params;

    try{
       await models.Admin.destroy({where: { id: id }});
        res.status(200).json({message: "Admin deleted successfully"});
    }catch(error){
      
        res.status(404).json({message: 'Somting went wrong', error: error})
    }

}

module.exports = {getAdmin, addAdmin, updateAdmin, deleteAdmin}

