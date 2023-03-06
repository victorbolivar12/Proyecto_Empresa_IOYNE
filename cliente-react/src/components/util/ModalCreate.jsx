import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiUserReceivedFill } from 'react-icons/all'

export const ModalCreate = ({Entity, Body, OnSutmit}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () =>{
        OnSutmit();
        handleClose();
    } 

    return (
        <>
            <Button onClick={handleShow} style={{ background: '#116b89', border: 'none' }}><RiUserReceivedFill style={{ marginRight: "10px" }} />Crear {Entity}</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Un Nuevo {Entity}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {Body}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}