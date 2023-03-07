import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { AiFillDelete, BiEditAlt } from 'react-icons/all'
import { useState } from 'react';

export const TableComponent = ({ dataSource, URL, handleUpdateElements, updateComponent }) => {

    const [selectUser, setSelectUser] = useState({})
    const [idUser, setIdtUser] = useState(null)
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const keys = dataSource.length > 0 ? Object.keys(dataSource[0]) : [];

    const deleteElement = async (id) => {
        await axios.delete(`${URL}${id}`)
        handleUpdateElements()
    }

    const handleUpdateClick = (id) => {
        getUser(id)
        setIdtUser(id)
        setShowUpdateModal(true);
    }

    const getUser = async (id) =>{
        const response = await axios.get(URL + id)
        setSelectUser(response.data)
    }
    
    const handleClose = () => setShowUpdateModal(false);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {keys.map((key) => ( !key.startsWith('id') && 
                            <th key={key} style={{background:'#116b89', color:'white'}}>{key.charAt(0).toUpperCase() + key.slice(1)}</th> // Generar los encabezados de la tabla utilizando las claves
                        ))}
                        <th style={{background:'#116b89', color:'white'}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((element) => (
                        <tr key={element.id}>
                            {keys.map((key) => (!key.startsWith('id')  && 
                                <td key={key}>{element[key]}</td> // Acceder a los valores del objeto utilizando las claves
                            ))}
                            <td>
                                <Button onClick={() => deleteElement(element.id)} variant="danger"><AiFillDelete /></Button>
                                <Button onClick={() => handleUpdateClick(element.id)} variant="primary"><BiEditAlt /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {selectUser && updateComponent(idUser,selectUser,showUpdateModal,handleClose,handleUpdateElements)}
        </>
    )
}

