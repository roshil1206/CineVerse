const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const response = require('../../utils/response');

const register = async (req, res) => {
  try {
    const { name, email, password, repassword, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return response(res,409,false,{ message: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, email, password: hashedPassword, repassword: hashedPassword, role });
    await newUser.save();
    return response(res,201,true,{ message: 'User created successfully' })
    
    // res.status(201).json({ message: 'User created successfully' });
} catch (error) {
    console.error('Error during registration', error);
    
    return response(res,500,false,{ message: 'Registration failed' })
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return response(res,401,true,{ message: 'Invalid email or password' })
    //   return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return response(res,401,true,{ message: 'Invalid email or password' })
    //   return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login', error);
    return response(res,500,true,{ message: 'Login failed' })
    // res.status(500).json({ message: 'Login failed' });
  }
};

module.exports = {
  register,
  login,
};
