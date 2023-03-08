import { ModalCreate } from "../util/ModalCreate"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import { URL_PRODUCT } from "../../endpoint/EndPoint";
import { URL_COSTUMER } from "../../endpoint/EndPoint";
import axios from 'axios'
import { useEffect } from "react";
import { AuthContext } from './../../application/AuthContext';
import { useContext } from 'react';

const FormBody = ({ formData, setFormData }) => {

    const { user } = useContext(AuthContext);

    const [product, setProduct] = useState([])
    const [costumer, setCostumer] = useState([])

    useEffect(() => {
        getProducts()
        getCostumer()
    }, [])


    const getProducts = async () => {
        const response = await axios.get(URL_PRODUCT)
        setProduct(response.data)
    }

    const getCostumer = async () => {
        const response = await axios.get(URL_COSTUMER)
        setCostumer(response.data)
    }

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
                        type='date'
                        name='date'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formCantidad'>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                        min='1'
                        max='50'
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
                        {
                            costumer.map((element) => {
                                return (
                                    <option value={element.nombre}>{element.nombre}</option>
                                )
                            })
                        }
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formDetalle'>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        type='text'
                        name='userId'
                        disabled='true'
                        value={user != null ? user.username : null}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formPrecio'>
                    <Form.Label>Producto</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Seleccione un producto</option>
                        {
                            product.map((element) => {
                                return (
                                    <option value={element.nombre}>{element.nombre}</option>
                                )
                            })
                        }
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