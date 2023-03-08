import { ModalCreate } from "../util/ModalCreate"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

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
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                        type='text'
                        name='date'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formCantidad'>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                        type='number'
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
                        name='producto'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formPrecio'>
                    <Form.Label>Cliente</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione un cliente</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formDetalle'>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type='text'
                        name='userId'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formPrecio'>
                    <Form.Label>Producto</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione un producto</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        </Form>
    )
}

export const CreateQuotes = () => {

    const [formData, setFormData] = useState({});

    const onSutmit = async () => {
        handleUpdate()
        console.log(formData);
    }

    return (
        <>
            <ModalCreate
                Entity='Cotizaciones'
                Body={<FormBody formData={formData} setFormData={setFormData} />}
                OnSutmit={onSutmit}
            />
        </>
    )
} 