const express = require('express')
const router = express.Router()
const UserModel = require('../schemas/user_schema')


// GET route to fetch users
router.get('/getUsers', async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error); 
      res.status(500).json({ error: "Error fetching users" });
    }
  });
    // Helper function to validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  router.put('/updateUser/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    // Input validation
    if (!name || !email) {
        return res.status(400).send({ status: 0, message: "Name and email are required" });
    }
    if (!validateEmail(email)) {
        return res.status(400).send({ status: 0, message: "Invalid email format" });
    }

    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { name, email },
            { new: true, runValidators: true }
        );

        if (updatedUser) {
            res.send({ status: 1, message: "User updated successfully", user: updatedUser });
        } else {
            res.status(404).send({ status: 0, message: "User not found" });
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send({ status: 0, message: "Error updating user", error: error.message });
    }
  });
  
  // Route to delete a user
  router.delete('/deleteUser/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const result = await UserModel.findByIdAndDelete(id);
      if (result) {
        res.send({ status: 1, message: "User deleted successfully" });
      } else {
        res.status(404).send({ status: 0, message: "User not found" });
      }
    } catch (error) {
      res.status(500).send({ status: 0, message: "Error deleting user", error: error.message });
    }
  });


  module.exports = router;