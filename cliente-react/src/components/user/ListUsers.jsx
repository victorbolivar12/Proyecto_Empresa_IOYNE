import { useState, useEffect } from "react"
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CreateUser } from "./CreateUser";
import { URL_USER } from "../../endpoint/EndPoint";
import { TableComponent } from "../util/Table";
import { UpdateUser } from "./UpdateUser";

export const ListUsers = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const res = await axios.get(URL_USER)
    console.log(res.data);
    setUsers(res.data)
  }


  return (
    <Container>
      <div style={{ display: 'flex',justifyContent:'space-between', marginBottom:'20px'}}>
          <h1 style={{fontSize:'30px'}}>Lista de Usuarios</h1>
          <CreateUser handleUpdateUser={getUsers}/>
      </div>
      <Row>
        <Col>
            <TableComponent 
              dataSource={users}
              URL = {URL_USER}
              handleUpdateElements = {getUsers}
              updateComponent={(id,selectUser, show, handleClose, handleUpdateElements) => (
                <UpdateUser id = {id} selectUser={selectUser} show={show} handleClose={handleClose} handleUpdateElements= {handleUpdateElements}/>
              )}
            />
        </Col>
      </Row>
    </Container>
  )
}
