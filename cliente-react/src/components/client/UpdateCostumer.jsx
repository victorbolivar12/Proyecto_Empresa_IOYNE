import { URL_COSTUMER } from '../../endpoint/EndPoint';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'


export const UpdateCostomer = ({ id, selectUser, show, handleClose, handleUpdateElements }) => {

    const [updateCostumer, setUpdateCostumer] = useState({
        nombre: undefined,
        apellido: undefined,
        telefono: undefined,
        direccion: undefined,
        edad: undefined,
        correo: undefined,
    });

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value === undefined ? selectUser['name'] : target.value
        setUpdateCostumer({ ...updateCostumer, [name]: value })
    }

    const handleSubmit = async () => {
        console.log(updateCostumer);
        await axios.put(URL_COSTUMER + id, updateCostumer)
        handleUpdateElements()
        handleClose()
    }


    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Formulario Para Editar un Cliente</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId='formNmbre'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder={selectUser.nombre}
                                name='nombre'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formApellido'>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder={selectUser.apellido}
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
                                placeholder={selectUser.telefono}
                                name='telefono'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formDireccion'>
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder={selectUser.direccion}
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
                                placeholder={selectUser.correo}
                                name='correo'
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formEdad'>
                            <Form.Label>Edad</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder={selectUser.edad}
                                name='edad'
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