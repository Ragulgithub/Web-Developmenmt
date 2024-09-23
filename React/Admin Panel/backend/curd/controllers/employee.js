const express = require('express')
const router = express.Router()
const UserModel = require('../schemas/user_schema')
// signup  -> // post->req.body

// POST route to add user to MongoDB
router.post('/addUser', async (req, res) => {
  try {
      const newUser = new UserModel({
          name: req.body.name,
          email: req.body.email
      });
      await newUser.save();
      res.status(201).json({ message: "User added successfully" });
  } catch (error) {
      res.status(400).json({ error: "Error adding user" });
  }
});

module.exports = router;