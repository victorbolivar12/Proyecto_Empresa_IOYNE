import { URL_USER } from '../../endpoint/EndPoint';
import { ModalCreate } from '../util/ModalCreate';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'

export const FormBody = ({ formData, setFormData, isEdit }) => {
  const handleInputChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setFormData({ ...formData, [name]: value })
  }

  return (
    <Form>
      <Row className='mb-3'>
        <Form.Group as={Col} controlId='formUsername'>
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type='texto'
            placeholder={isEdit ? formData.username : 'usuario'}
            name='username'
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId='formPassword'>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type='password'
            placeholder={isEdit ? formData.password : 'contraseña'}
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
            placeholder={isEdit ? formData.email : 'correo'}
            name='email'
            onChange={handleInputChange}
          />
        </Form.Group>

        {!isEdit && <Form.Group as={Col} controlId='formRol'>
          <Form.Label>Rol</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={handleInputChange}
            name='rol'
          >
            <option>Abrir menú de selección</option>
            <option value="Admin">Admin</option>
            <option value="Gestor">Gestor</option>
          </Form.Select>
        </Form.Group>}

      </Row>
    </Form>
  )
}

export const CreateUser = ({ handleUpdateUser }) => {

  const [dataUser, setDataUser] = useState({
    username: '',
    password: '',
    email: '',
    rol: ''
  });


  const onSutmit = async () => {
    await axios.post(URL_USER, dataUser)
    handleUpdateUser()
    console.log(formData);
  }

  return (
    <>
      <ModalCreate
        Entity='Usuario'
        Body={<FormBody formData={dataUser} setFormData={setDataUser} isEdit={false} />}
        OnSutmit={onSutmit}
      />
    </>
  )
}

