import { URL_PRODUCT } from "../../endpoint/EndPoint"
import { CreateProduct } from "./CreateProduct";
import { UpdateProduct } from "./UpdateProduct";
import { TableComponent } from "../util/Table";
import { useEffect, useState } from "react";
import { Card } from "../util/Card";
import axios from "axios"

export const ListProducts = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        getAllProduct()
    }, [])


    const getAllProduct = async () => {
        const response = await axios.get(URL_PRODUCT)
        setProduct(response.data)
    }

    return (
        <Card
            title='Lista de Productos'
            createComponent={<CreateProduct handleUpdate={getAllProduct} />}
            tableComponent={
                <TableComponent
                    dataSource={products}
                    URL={URL_PRODUCT}
                    handleUpdateElements={getAllProduct}
                    updateComponent={(id, selectUser, show, handleClose, handleUpdateElements) => (
                        <UpdateProduct
                            id={id}
                            selectUser={selectUser}
                            show={show}
                            handleClose={handleClose}
                            handleUpdateElements={handleUpdateElements}
                        />
                    )}
                />
            }
        />
    )
}