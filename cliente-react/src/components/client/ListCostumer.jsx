import { URL_COSTUMER } from "../../endpoint/EndPoint"
import { CreateCostumer } from "./CreateCostumer"
import { UpdateCostomer } from "./UpdateCostumer"
import { TableComponent } from "../util/Table"
import { useState, useEffect } from "react"
import { Card } from "../util/Card"
import axios from "axios"


export const ListCostumer = () => {

    const [costumer, setCostumer] = useState([])

    useEffect(() => {
        getAllCostumer();
    }, [])

    const getAllCostumer = async () => {
        const response = await axios.get(URL_COSTUMER)
        setCostumer(response.data)
    }

    return (
        <Card
            title='Lista de Clientes'
            createComponent={<CreateCostumer handleUpdate={getAllCostumer} />}
            tableComponent={
                <TableComponent
                    dataSource={costumer}
                    URL={URL_COSTUMER}
                    handleUpdateElements={getAllCostumer}
                    updateComponent={(id, selectUser, show, handleClose, handleUpdateElements) => (
                        <UpdateCostomer
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