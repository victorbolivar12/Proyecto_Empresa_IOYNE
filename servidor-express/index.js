import express  from 'express'
import cors from 'cors'
import db from './database/db.js'
import usersRoutes from './routes/routes.js'
import authRoutes from "./routes/auth.routes.js";
import productRoutes from './routes/product.routes.js'
import custumerRoutes from './routes/costumer.routes.js'
import mailRoutes from './routes/mail.routes.js'
//import quoteRoutes from './routes/quote.routes.js'

const app = express()
const port = 5000

app.use( cors() )
app.use(express.json())

// Agrega las rutas de user
app.use('/users',usersRoutes)

// Agrega las rutas de productos
app.use('/product',productRoutes)

// Agrega las rutas de autenticación
app.use("/auth", authRoutes)

// Agrega las rutas de  clientes
app.use('/costumer',custumerRoutes)
 
//Agrega las rutas de las cotizaciones 
//app.use('/quote',quoteRoutes)

//agrega las rutas para enviar un correo
app.use('/send-mail',mailRoutes)


//Define la coneccion a la base de datos
try {
  await db.authenticate()
  console.log('Connecion exitosa a la base de datos');
} catch (error) {
  console.log(`Error: ${error}`);
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})