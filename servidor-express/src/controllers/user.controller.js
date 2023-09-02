import UserModule from "../models/user.module.js";
import bcrypt from 'bcrypt';


// GET /users
const getUsers = async (req, res) => {
  const { username, password, email, rol } = req.body;

  try {

    const newUser = await UserModule.create({
      username,
      password,
      email,
      rol,
    });

    return res.status(201).json({ user: newUser });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      // Handle unique constraint violation error (duplicate mail or user)
      return res.status(400).json({ message: "Username or email already exists" });
    } else {
      console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
  }
};

// GET /users/:id
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModule.findByPk(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST /users
const createUser = async (req, res) => {
  const { password } = req.body;

  try {

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { ...req.body, ['password']: hashedPassword }

    await UserModule.create(user)
    res.json({
        "message":"user created successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// PUT /users/:id
const updateUser = async (req, res) => {
  try {
    await UserModule.update(req.body,{where:{id:req.params.id}})
    res.json({
        "message": "User updated successfully"
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE /users/:id
const deleteUser = async (req, res) => {
  try {
    await UserModule.destroy({where:{id: req.params.id}})
    res.json({
      "message": "Record deleted successfully"
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
