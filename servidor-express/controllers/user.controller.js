import UserModule from "../models/user.module.js";

// GET /users
const getUsers = async (req, res) => {
  try {
    const users = await UserModule.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
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
  try {
    await UserModule.create(req.body)
    res.json({
        "message":"Usuario creado correctamente"
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
        "message": "Usuario actulizado con exito"
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
      "message": "Registro eliminado con exito"
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export { getUsers, getUserById, createUser, updateUser, deleteUser };
