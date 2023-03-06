import { URL_PRODUCT } from '../../endpoint/EndPoint';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'

export const UpdateProduct = ({ id, selectUser, show, handleClose, handleUpdateElements }) => {

    const [updateProduct, setUpdateProduct] = useState({});

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value == undefined ? selectUser['name'] : target.value
        setUpdateProduct({ ...updateProduct, [name]: value })
    }

    const handleSubmit = async () => {
        await axios.put(URL_PRODUCT + id, updateProduct)
        handleUpdateElements()
        handleClose()
    }


    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Formulario Para Editar un Producto</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='formNombre'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder={selectUser.nombre}
                                name='nombre'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formCantidad'>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder={selectUser.cantidad}
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
                                placeholder={selectUser.detalle}
                                name='detalle'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formPrecio'>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder={selectUser.precio}
                                name='precio'
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                    </Row>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>Cerrar</Button>
                <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
            </Modal.Footer>
        </Modal>
    )
} 