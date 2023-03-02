import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AiFillEdit } from 'react-icons/all';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const UpdateUser = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow} style={{ border: 'none' }}><AiFillEdit style={{ marginRight: "10px" }} /></Button>

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
                  placeholder='usuario'
                  name='name'
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formPassword'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='contraseña'
                  name='password'
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
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formRol'>
                <Form.Label>Rol</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Admin</option>
                  <option value="1">Gestor</option>
                </Form.Select>
              </Form.Group>
            </Row>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Cerrar</Button>
          <Button variant="primary" onClick={handleClose}>Guardar Cambios</Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

