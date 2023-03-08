import { AuthContext } from './../../application/AuthContext';
import { URL_USER } from '../../endpoint/EndPoint';
import Button from "react-bootstrap/esm/Button";
import { FormBody } from "../user/CreateUser";
import { useContext, useState } from 'react';
import { Card } from "../util/Card"
import axios from 'axios';

export const Setting = () => {
    const { user } = useContext(AuthContext);

    const [updateUser, setUpdateUser] = useState(user);

    const onSutmit = async () => {
        console.log(updateUser);
        try {
            await axios.put(URL_USER + user.id, updateUser);
            alert('Datos guardados con exito')
        } catch (error) {
            alert('Error al guardar los datos')
        }
        //Enviar los datos nuevos del u
    }

    return (
        <>
            <Card
                title='Configuracion  de la Cuenta'
                tableComponent={<FormBody formData={updateUser} setFormData={setUpdateUser} isEdit={true} />}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Button onClick={onSutmit} variant="primary">Guardar Cambios</Button>
            </div>
        </>

    )
}