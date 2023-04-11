import { URL_PRODUCT, URL_COSTUMER, URL_USER, URL_QUOTE} from "../../endpoint/EndPoint";
import { AuthContext } from './../../application/AuthContext';
import { ModalCreate } from "../util/ModalCreate"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";
import { Container } from 'react-bootstrap';

export const FormBody = ({ formData, setFormData }) => {

    const [product, setProduct] = useState([])
    const [costumer, setCostumer] = useState([])
    const [users, setUsers] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        getProducts()
        getCostumer()
        getUsers()
    }, [])


    const getProducts = async () => {
        const response = await axios.get(URL_PRODUCT)
        setProduct(response.data)
    }

    const getCostumer = async () => {
        const response = await axios.get(URL_COSTUMER)
        setCostumer(response.data)
    }

    const getUsers = async () => {
        const response = await axios.get(URL_USER)
        setUsers(response.data)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newValue = (name === 'id_usuario' || name === 'id_cliente') ? parseInt(value) : value;
        setFormData({ ...formData, [name]: newValue });
    }


    const handleProductChange = (e) => {
        const productId = parseInt(e.target.id);
        const quantity = parseInt(e.target.value);
        const isChecked = e.target.checked;
        const nameID = e.target.name;
        const newSelectedProducts = [...selectedProducts];

        console.log(newSelectedProducts);
      
        if (isChecked) {
          //const productIndex = newSelectedProducts.findIndex((product) => product.id === productId);
            newSelectedProducts.push({ id: productId, cantidad: 0 });
        } else {
          const productIndex = newSelectedProducts.findIndex((product) => product.id == productId);
          if (productIndex !== -1) {
            newSelectedProducts.splice(productIndex, 1);
          }
        }

        if(quantity){
            const productIndex = newSelectedProducts.findIndex((product) => product.id == nameID);
            newSelectedProducts[productIndex].cantidad = quantity;
        }
      
        setSelectedProducts(newSelectedProducts);
        setFormData({ ...formData, productos: selectedProducts });
    };


    return (
        <Form>
            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formNombre'>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                        type='date'
                        name='fecha'
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group as={Col} controlId='formCostumer'>
                    <Form.Label>Cliente</Form.Label>
                    <Form.Select aria-label="Default select example"
                        onChange={handleInputChange}
                        name = 'id_cliente'
                    >
                        <option>Seleccione un cliente</option>
                        {
                            costumer.map((element) => <option value={element.id}>{element.nombre} {element.apellido}</option>)
                        }
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className='mb-3'>
                <Form.Group as={Col} controlId='formPrecio'>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Select aria-label="Default select example"
                        onChange={handleInputChange}
                        name = 'id_usuario'
                    >
                        <option>Seleccione un usuario</option>
                        {
                            users.map((element) => <option value={element.id}>{element.username}</option>)
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId='formPrecio'>
                    <Form.Label>Descuento</Form.Label>
                    <Form.Select aria-label="Default select example"
                        name='tipoDescuento'
                        onChange={handleInputChange}
                    >
                        <option>Seleccione tipo de descuento</option>
                        <option value='Porcentual' >Porcentual</option>
                        <option value='Monto Fijo'>Monto Fijo</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Form.Label>Selccione los productos</Form.Label>
            <Container className="overflow-auto" style={{ height: '300px' }}>
                {
                    product.map((product) => {
                        return (
                            <Row className='mb-3'>
                                <Form.Group as={Col} controlId='formNombre'>
                                    <Form.Check
                                        type='checkbox'
                                        label={product.nombre}
                                        onChange={handleProductChange}
                                        id = {product.id}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId='formPrecio'>
                                    <Form.Control
                                        type='number'
                                        name= {product.id}
                                        max = {product.cantidad}
                                        min = '0'
                                        onChange={handleProductChange}
                                        disabled={!selectedProducts.some(p => p.id === product.id)}
                                    />
                                </Form.Group>
                            </Row>
                        )
                    })
                }

        </Container>

        </Form >
    )
}

export const CreateQuotes = ({handleUpdate}) => {

    const [formData, setFormData] = useState({});

    const onSutmit = async () => {
        await axios.post(URL_QUOTE,formData)
        alert("Cotizacion creada con exito")
        handleUpdate()
    }

    return (
        <>
            <ModalCreate
                Entity='Cotizaciones'
                Body={<FormBody formData={formData} setFormData={setFormData} />}
                OnSutmit={onSutmit}
            />
        </>
    )
} 