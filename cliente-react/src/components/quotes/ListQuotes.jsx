import { AiFillDelete, BiEditAlt } from 'react-icons/all'
import { URL_MAIL } from '../../endpoint/EndPoint'
import { MdAttachEmail } from 'react-icons/all'
import { CreateQuotes } from './CreateQuote'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import { Card } from './../util/Card'
import { useState, useEffect } from "react";
import axios from 'axios'
import { URL_QUOTE } from "../../endpoint/EndPoint";
import UpdateQuote from './UpdateQuote'
import ConfirmDelete from '../util/ConfirmDelete'

const TableQoutes = ({ data, updateData }) => {

    const [selectedQuote, setSelectedQuote] = useState(null);
    const [selectDelete, setSelectDelete] = useState(null);

    const handleEdit = (id) => {
        setSelectedQuote(id);
    };

    const deleteQuote = (id) => {
        setSelectDelete(id);
    }

    const handleSend = (id) => {
        try {
            axios.get(URL_MAIL + id)
            alert('Correo enviado: ' + URL_MAIL + id)
        } catch (error) {
            console.log(error);
            alert("Error al enviar cotizacion" + error)
        }
    }


    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ background: '#116b89', color: 'white' }}>Fecha</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Usuario</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Cliente</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Nro Productos</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Descuento</th>
                        <th style={{ background: '#116b89', color: 'white' }}>SubTotal</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Total</th>
                        <th style={{ background: '#116b89', color: 'white' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element) => {
                            return (
                                <tr>
                                    <td>{element.fecha}</td>
                                    <td>{element.user.username}</td>
                                    <td>{element.customer.nombre} {element.customer.apellido}</td>
                                    <td>{element.products.reduce((acc, cur) => acc + cur.quotes_products.cantidad, 0)} </td>
                                    <td>{parseFloat(element.descuento).toFixed(2)}</td>
                                    <td>{parseFloat(element.subtotal).toFixed(2)}</td>
                                    <td>{parseFloat(element.total).toFixed(2)}</td>
                                    <td>
                                        <Button onClick={() => deleteQuote(element.id)} variant="danger"><AiFillDelete /></Button>
                                        <Button onClick={() => handleEdit(element.id)} variant="primary"><BiEditAlt /></Button>
                                        <Button onClick={() => handleSend(element.id)} variant="secondary"><MdAttachEmail /></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            {selectedQuote && <UpdateQuote id={selectedQuote} updateId={setSelectedQuote} updateData={updateData} />}
            {selectDelete && <ConfirmDelete id={selectDelete} updateId={setSelectDelete} updateData={updateData} url={URL_QUOTE} />}
        </>
    )
}

export const ListQuotes = () => {

    const [qoutes, setQoutes] = useState([]);

    useEffect(() => {
        getQoutes()
    }, [])

    const getQoutes = async () => {
        const response = await axios.get(URL_QUOTE)
        setQoutes(response.data)
    }



    return (
        <>
            <Card
                title='Lista de cotizaciones'
                createComponent={<CreateQuotes handleUpdate={getQoutes} />}
                tableComponent={<TableQoutes data={qoutes} updateData={getQoutes} />}
            />
        </>

    )
}