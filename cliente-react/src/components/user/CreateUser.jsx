import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiUserReceivedFill } from 'react-icons/all'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import { URL_USER } from '../../endpoint/EndPoint';


export const CreateUser = ({handleUpdateUser }) => {

  const [show, setShow] = useState(false);
  const [dataUser, setDataUser] = useState({
    username:'',
    password:'',
    email: '',
    rol:''
  });
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) =>{
    const target = e.target
    const value = target.value;
    const name = target.name

    setDataUser({...dataUser, [name]: value })
  }

  const handleSubmit = async () =>{
    setShow(false);
    console.log(dataUser);
    await axios.post(URL_USER,dataUser)
    handleUpdateUser()
  }

  return (
    <>
      <Button onClick={handleShow} style={{ background: '#116b89', border: 'none' }}><RiUserReceivedFill style={{ marginRight: "10px" }} />Crear usuario</Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario Para Crear Un Nuevo Usuario</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formUsername'>
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type='texto'
                  placeholder='usuario'
                  name='username'
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='contraseña'
                  name='password'
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formEmail'>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='correo'
                  name='email'
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formRol'>
                <Form.Label>Rol</Form.Label>
                <Form.Select 
                  aria-label="Default select example" 
                  onChange={handleInputChange}
                  name = 'rol'
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
          <Button variant="danger" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

