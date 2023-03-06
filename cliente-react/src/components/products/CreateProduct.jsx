import { URL_COSTUMER, URL_PRODUCT } from "../../endpoint/EndPoint";
import { ModalCreate } from "../util/ModalCreate"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import axios from 'axios';

const FormBody = ({ formData, setFormData }) => {

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        setFormData({ ...formData, [name]: value })
    }

    return (
        <Form>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formNombre'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Ingrese el nombre del producto'
                        name='nombre'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formCantidad'>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Ingrese el cantidad del producto'
                        name='cantidad'
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formDetalle'>
                    <Form.Label>Detalle</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Ingrese el detalle del producto'
                        name='detalle'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formPrecio'>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Ingrese la precio del producto'
                        name='precio'
                        onChange={handleInputChange}
                    />
                </Form.Group>
            </Row>

        </Form>
    )

}

export const CreateProduct = ({handleUpdate}) => {

    const [formData, setFormData] = useState({
        nombre: '',
        cantidad: 0,
        detalle: '',
        precio: 0
    });

    const onSutmit = async () =>{
        await axios.post(URL_PRODUCT,formData)
        handleUpdate()
        console.log(formData);
    }


    return (
        <>
            <ModalCreate
                Entity='Producto'
                Body={<FormBody formData={formData} setFormData = {setFormData} />}
                OnSutmit = {onSutmit}
            />
        </>
    )
}