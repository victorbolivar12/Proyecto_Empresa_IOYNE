import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { URL_USER } from '../../endpoint/EndPoint';
import axios from 'axios'

export const UpdateUser = ({id ,selectUser, show, handleClose, handleUpdateElements }) => {

  const [updateUser, setUpdateUser] = useState({
    username: selectUser.username,
    password: selectUser.password,
    email: selectUser.email,
    rol: selectUser.rol
  });

  const handleInputChange = (e) =>{
    const target = e.target
    const value = target.value;
    const name = target.name
    setUpdateUser({...updateUser, [name]: value })
  }

  const handleSubmit = async () =>{
    await axios.put(URL_USER+id,updateUser)
    handleUpdateElements()
    handleClose()
  }

  return (
    <>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Para Editar la Informacion de un Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formUsername'>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type='texto'
                  name='username'
                  placeholder = {selectUser.username}
                  onChange = {handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder= {selectUser.password}
                  onChange = {handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formEmail'>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder = {selectUser.email}
                  onChange = {handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formRol'>
                <Form.Label>Rol</Form.Label>
                <Form.Select 
                  aria-label="Default select example"
                  name = 'rol'
                  onChange = {handleInputChange}
                >
                  <option>Abrir menú de selección</option>
                  <option value = "Admin">Admin</option>
                  <option value= "Gestor">Gestor</option>
                </Form.Select>
              </Form.Group>
            </Row>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Cerrar</Button>
          <Button onClick = {handleSubmit} variant="primary" >Guardar Cambios</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

