import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModule from "../models/user.module.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user in the database using their email
    const user = await UserModule.findOne({ where: { email } });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    //Compare the provided password with the password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      //Password is valid, generate a JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      //Return the token and user information
      return res.status(200).json({ token });
    } else {
      //If the password is invalid, return an error message
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


