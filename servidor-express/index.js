import express  from 'express'
import cors from 'cors'
import db from './database/db.js'
import usersRoutes from './routes/routes.js'

const app = express()
const port = 5000

app.use( cors() )
app.use(express.json())
app.use('/users',usersRoutes)

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