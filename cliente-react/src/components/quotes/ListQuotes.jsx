import { AiFillDelete, BiEditAlt} from 'react-icons/all'
import { URL_MAIL } from '../../endpoint/EndPoint'
import {MdAttachEmail} from 'react-icons/all'
import Button from 'react-bootstrap/Button'
import { qoutes } from './../../data/data'
import Table from 'react-bootstrap/Table'
import { Card } from './../util/Card'
import axios from 'axios'
import { CreateQuotes } from './CreateQuote'


const TableQoutes = ({ data }) => {

    const handleSend = (id) => {
        try {
            axios.post(URL_MAIL+id)
        } catch (error) {
            console.log(error);
        }
        alert('Correo enviado: '+URL_MAIL+id)
    }

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th style={{ background: '#116b89', color: 'white' }}>ID</th>
                    <th style={{ background: '#116b89', color: 'white' }}>Fecha</th>
                    <th style={{ background: '#116b89', color: 'white' }}>Usuario</th>
                    <th style={{ background: '#116b89', color: 'white' }}>Cliente</th>
                    <th style={{ background: '#116b89', color: 'white' }}>Productos</th>
                    <th style={{ background: '#116b89', color: 'white' }}>Total</th>
                    <th style={{ background: '#116b89', color: 'white' }}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((element) => {
                        return (
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.date}</td>
                                <td>{element.userId.username}</td>
                                <td>{element.costumerId.nombre}</td>
                                <td>{element.productos.length}</td>
                                <td>{element.total}</td>
                                <td>
                                    <Button variant="danger"><AiFillDelete /></Button>
                                    <Button variant="primary"><BiEditAlt /></Button>
                                    <Button onClick={() => handleSend(element.id)} variant="secondary"><MdAttachEmail/></Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
        </Table>
    )
}

export const ListQuotes = () => {
   
    return (
        <>
            <Card
                title='Lista de cotizaciones'
                createComponent = {<CreateQuotes/>}
                tableComponent={<TableQoutes data={qoutes} />}
            />
        </>

    )
}