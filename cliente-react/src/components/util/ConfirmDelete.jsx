import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ConfirmDelete({ id, updateId, updateData, url }) {

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        updateId(null)
    }

    const deleteSubmit = async() =>{
        try {
            await axios.delete(url+id)
            handleClose()
            updateData()
        } catch (error) {
            alert("Error al borrar este registro")
        }
    }

    return (
        <Modal size="small" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deseas Eliminar Este Registro</Modal.Title>
            </Modal.Header>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>No</Button>
                <Button onClick={() => deleteSubmit()} variant="primary" >Si</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmDelete