const { models } = require("../config");
const jwt = require('jsonwebtoken');
const secretKey = "Inovant@123";

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const getUser = await models.User.findOne({
      where: { email: email } 

    });

    if (!getUser) {
      return res.status(400).json({ message: "User not found" });
    }

    if (getUser.password !== password) {
      return res.status(400).json({ message: "Password is incorrect" });
    }

    const payload = {
      id: getUser.id,
      email: getUser.email,
      userName: getUser.userName
    };

    const createToken = jwt.sign(payload, secretKey, 
        { expiresIn: '5000s' } )
  

    return res.status(200).json({
      message: "Login successful",
      
      token: createToken,
      userId: getUser.id,
      userName: getUser.userName
    });

  } catch (error) {

    return res.status(500).json({ message: "Something went wrong", error: error.message })
  }
}

module.exports = { login };
