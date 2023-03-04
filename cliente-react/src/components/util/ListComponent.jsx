import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export function ListComponent({ dataSource, editComponent, addComponent , title }) {

    const keys = Object.keys(dataSource[0]); // Obtener las claves del primer objeto del dataSource

    return (
        <>
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <h1 style={{ fontSize: '30px' }}>{title}</h1>
                    {addComponent}
                </div>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    {keys.map((key) => (
                                        <th key={key}>{key}</th> // Generar los encabezados de la tabla utilizando las claves
                                    ))}
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSource.map((element) => (
                                    <tr key={element.id}>
                                        {keys.map((key) => (
                                            <td key={key}>{element[key]}</td> // Acceder a los valores del objeto utilizando las claves
                                        ))}
                                        <td>
                                           
                                            {/* {React.cloneElement(editComponent, { userData: element })} */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
