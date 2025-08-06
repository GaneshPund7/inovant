 const {models} = require("../../config");
 
async function getUser (req, res){
    try{
        const user = await models.User.findAll();
        console.log(user)
     res.status(200).json({message:"User found Successfully", result :user});
    }catch(error){
        console.log(error)
        res.status(404).json({Message: "Somthing wnet wrong", error: error})
    }
}

async function addUser(req, res){
    const { userName, email, mobile, address, password} = req.body;
    console.log(req.body)
    try{
        if(!userName || !email || !mobile || !address || !password){
            res.status(401).json(" All fields are required")
        }
        const addUser = await models.User.create({
            userName, email, mobile, address, password 
        })
        res.status(200).json({message: "User created successfuly", result: addUser});
    }catch(error){
       console.log(error)
        res.status(404).json({message: "Somthing went wrong", error: error})
    }
}

async function updateUser ( req, res){
    const { id } = req.params;
 
    try{         
     const updated = await models.User.update(req.body, {
      where: { id: id },
    });
    if(!updated){
        return res.status(404).json({message: "User not found"});
    }
         res.status(200).json({message: "User updated successfuly", result: updateUser})
    }catch(error){
        res.status(404).json({message: "Somthing went wrong", error: error})
    }
}

async function deleteUser(req, res){
    const { id } = req.params;

    try{
       await models.destroy({ where: { id: id }});
        res.status(200).json({message: "User deleted successfully"});
    }catch(error){
        res.status(404).json({message: 'Somting went wrong', error: error})
    }

}

module.exports = {getUser, addUser, updateUser, deleteUser}