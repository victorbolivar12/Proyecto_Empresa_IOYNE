import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { AiFillDelete } from 'react-icons/all'

export const TableComponent = ({ dataSource }) => {
    const keys = Object.keys(dataSource[0]); // Obtener las claves del primer objeto del dataSource
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {keys.map((key) => (
                            <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th> // Generar los encabezados de la tabla utilizando las claves
                        ))}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </Table>
        </>
    )
}

