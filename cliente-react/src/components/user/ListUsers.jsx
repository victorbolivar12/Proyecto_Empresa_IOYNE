import { useState, useEffect } from "react"
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {AiFillDelete} from 'react-icons/all'
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";

const URI = 'http://localhost:5000/users/'

export const ListUsers = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])


  const getUsers = async () => {
    const res = await axios.get(URI)
    console.log(res.data);
    setUsers(res.data)
  }

  const deleteUser = async (id) => {
    axios.delete(`${URI}${id}`)
    getUsers()
  }

  return (
    <Container>
      <div style={{ display: 'flex',justifyContent:'space-between', marginBottom:'20px'}}>
          <h1 style={{fontSize:'30px'}}>Lista de Usuarios</h1>
          <CreateUser/>
      </div>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.rol}</td>
                      <td>
                          <UpdateUser/>
                          <Button style={{marginLeft:'15px'}} onClick={()=> deleteUser(user.id)} variant="danger"><AiFillDelete/></Button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
