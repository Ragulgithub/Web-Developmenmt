const express = require('express');
const mongoose = require('mongoose');  // Import mongoose for ObjectId casting
const router = express.Router();
const UserModel = require('../schemas/status_schema');  // Assuming this is the correct model

// Update status route
router.put('/updateStatus/:id', async (req, res) => {
  const userId = req.params.id;
  const { status } = req.body;  // Get the new status from the request body

  const allowedStatuses = ['Active', 'Inactive']; // Example statuses
if (!allowedStatuses.includes(status)) {
  return res.status(400).json({ message: 'Invalid status value' });
}


  try {
    // Check if the passed ID is a valid ObjectId, if not return an error
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid User ID' });
    }

    // Find the user by ID
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the status
    user.status = status;
    await user.save();  // Save the updated user in the database

    // Return success response
    res.json({ message: 'Status updated successfully', user });
  } catch (error) {
    console.error('Error updating user status:', error);
    res.status(500).json({ message: 'Error updating status', error });
  }
});

module.exports = router;
