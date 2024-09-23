const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const router = express.Router()
const UserModel = require('../schemas/register_schema')

router.post('/register', async (req, res) => {
    try {
        const pwd = req.body.password;
        const hashedpassword= bcrypt.hashSync(pwd,10);
      const newUser = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password:hashedpassword
      });
     const result= await newUser.save();
      res.status(201).json({ message: "User added successfully",id: result._id });
    } catch (error) {
      res.status(400).json({ error: "Error adding user" });
    }
  });

 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const isEmailExist = await UserModel.findOne({ email: email });

  if (isEmailExist) {
      const dbPassword = isEmailExist.password;
      const result = bcrypt.compareSync(password, dbPassword);
      if (result) {
          // Generate JWT token
          const token = jwt.sign(
              { id: isEmailExist._id }, 
              'your-secret-key', 
              { expiresIn: '1h' }  // Token valid for 1 hour
          );

          res.send({ status: 1, message: "logged in successfully", token: token });
      } else {
          res.send({ status: 0, message: "password does not match" });
      }
  } else {
      res.send({ status: 0, message: "email does not exist in our system" });
  }
});

module.exports = router;