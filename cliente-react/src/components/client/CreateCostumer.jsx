import { URL_COSTUMER } from "../../endpoint/EndPoint";
import { ModalCreate } from "../util/ModalCreate"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import axios from 'axios';

//Formulario Cliente
const FormBody = ({formData,setFormData}) => { 

    const handleInputChange = (e)=> {
        const target = e.target
        const value = target.value
        const name = target.name

        setFormData({...formData, [name]:value})
    }

    return(
        <Form>
            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formNmbre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese el nombre del cliente'
                  name='nombre'
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formApellido'>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese el apellido del cliente'
                  name='apellido'
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formTelefono'>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingrese el telefono del cliente'
                  name='telefono'
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formDireccion'>
                <Form.Label>Direccion</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Ingrese la direccion del cliente'
                  name='direccion'
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group as={Col} controlId='formCorreo'>
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Ingrese el correo del cliente'
                  name='correo'
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId='formEdad'>
                <Form.Label>Edad</Form.Label>
                <Form.Control
                  type='number'
                  placeholder='Ingrese la Edad del cliente'
                  name='edad'
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Row>
        </Form>
    )
}

export const CreateCostumer = ({handleUpdate}) =>{

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: '',
        correo: '',
        edad: 0,
    });

    const onSutmit = async () =>{
        await axios.post(URL_COSTUMER,formData)
        handleUpdate()
        console.log(formData);
    }

    return(
        <ModalCreate 
            Entity = 'Cliente'
            Body={<FormBody formData={formData} setFormData = {setFormData} />}
            OnSutmit = {onSutmit}
        />
    )
}