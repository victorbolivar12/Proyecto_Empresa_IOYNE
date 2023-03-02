import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import logo from './../assets/Logoo.png'

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a un servidor o realizar otras acciones
  };

  return (
    <>
      <Card className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body rounded" style={{ height: "550px"}}>
        <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
          <img src={logo} alt="LogoEmpresa" style={{ maxWidth: '50%', maxHeight: '50%', background:'#06aed5', padding: '5px', borderRadius:'50%' }}></img>
          <Card.Title style ={{marginTop:'10px'}} className='mb-4 text-center'>Iniciar Sesión</Card.Title>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="d-flex justify-content-center" variant="primary" type="submit">
              Iniciar Seccion
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
