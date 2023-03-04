import { useState, useEffect } from "react"
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CreateUser } from "./CreateUser";

import { TableComponent } from "../util/Table";

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

  // const deleteUser = async (id) => {
  //   axios.delete(`${URI}${id}`)
  //   getUsers()
  // }

  return (
    <Container>
      <div style={{ display: 'flex',justifyContent:'space-between', marginBottom:'20px'}}>
          <h1 style={{fontSize:'30px'}}>Lista de Usuarios</h1>
          <CreateUser/>
      </div>
      <Row>
        <Col>
            <TableComponent dataSource={users}/>
        </Col>
      </Row>
    </Container>
  )
}
