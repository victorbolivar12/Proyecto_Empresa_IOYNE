import { useState } from 'react';
import axios from 'axios';
import { FormBody } from './CreateQuote'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { URL_QUOTE } from '../../endpoint/EndPoint';

function UpdateQuote({id, updateId, updateData}) {

    const [show, setShow] = useState(true);
    const [formData, setFormData] = useState({});

    const handleClose = () => {
        setShow(false);
        updateId(null)
    }

    const handleSubmit = async () => {
        await axios.put(URL_QUOTE+id,formData)
        handleClose()
        updateData()
    }

    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Formulario Para Editar la Informacion de una cotizacion</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormBody formData={formData} setFormData={setFormData} />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>Cerrar</Button>
                <Button onClick={() => handleSubmit()} variant="primary" >Guardar Cambios</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateQuote