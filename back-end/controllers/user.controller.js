const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// to save a user
exports.createUser = async (req,res) => {
    try {
    
        const { name, email, password } = req.body;
          const existingUser = await User.findOne({ $or: [{ email }] });
          if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists.' });
          }
    
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user
        const user = new User({
          ...req.body,
          password: hashedPassword, 
        });
    
        await user.save();
        res.status(201).json({
          user:{
            name: user.name,
            email: user.email,
          },
          message: 'User created successfully!',
          
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// to login a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password, please try again.' });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Send response with token and user data
        res.status(200).json({
            token,
            user: {
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        console.error('Login error:', error); 
        res.status(500).json({ message: 'Internal server error. Please try again later.' });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found'});
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


// Update a user
exports.updateUser = async (req, res) => {
    try {
  
      const tempUser = await User.findById(req.params.id);
      if (!tempUser) return res.status(404).json({ message: 'User not found please try again' });
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
      res.statu(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };



