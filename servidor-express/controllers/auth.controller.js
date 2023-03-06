import UserModule from "../models/user.module.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Busca al usuario en la base de datos utilizando su correo electrónico
      const user = await UserModule.findOne({ where: { email } });
  
      // Verifica si el usuario existe y si su contraseña es válida
      if (user && user.password === password) {
        // Retorna el usuario
        return res.status(200).json({ user });
      } else {
        // Si el usuario no existe o su contraseña es inválida, devuelve un mensaje de error
        return res.status(401).json({ message: "Credenciales inválidas" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error en el servidor" });
    }
};
