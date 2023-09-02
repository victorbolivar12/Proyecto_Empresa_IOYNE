import app from './app.js'
import * as dotenv from 'dotenv'
import createTables from '../src/lib/initializeTables.js'
import runSeeders from './seeders/leadSeeaders.js'

dotenv.config()
import db from './db.js'
import usersRoutes from './routes/routes.js'
import authRoutes from "./routes/auth.routes.js";
import productRoutes from './routes/product.routes.js'
import custumerRoutes from './routes/costumer.routes.js'
//import mailRoutes from './routes/mail.routes.js'
import quoteRoutes from './routes/quote.routes.js'

//defines the server routes
app.use('/users',usersRoutes)
app.use('/products',productRoutes)
app.use("/auth", authRoutes)
app.use('/costumers',custumerRoutes)
app.use('/quotes',quoteRoutes)
// app.use('/send-mail',mailRoutes)


//defines functions that start with the server
try {
  await db.authenticate()
  createTables()
  runSeeders()
} catch (error) {
  console.log(`Error: ${error}`);
}

app.get('/', (req, res) => {
  res.send({
    "name": "servidor-express",
    "version": "1.0.0",
    "description": "proyecto Empresa IOYNE",
    "type": "module",
    "main": "index.js",
    "author": "Victor Bolivar",
    "license": "ISC",
  });
});

app.listen(process.env.PORT, () => {})