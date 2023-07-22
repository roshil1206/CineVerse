const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/UserModel");
const response = require("../../utils/response");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response(res, 409, false, { message: "User already exists" });
    }

    if (password !== confirmPassword) {
      return response(res, 409, false, { message: "Password dosen't match." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = await stripe.customers.create({
      email,
    });
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      repassword: hashedPassword,
      stripeCustomerId: customer.id,
    });
    await newUser.save();
    return response(res, 201, true, { message: "User created successfully" });
  } catch (error) {
    console.error("Error during registration", error);
    return response(res, 500, false, { message: "Registration failed" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response(res, 401, true, { message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return response(res, 401, true, { message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    return response(res, 200, true, { token, email: user.email, name: user.name });
  } catch (error) {
    return response(res, 500, false, { message: "Login failed" });
  }
};

module.exports = {
  register,
  login,
};
