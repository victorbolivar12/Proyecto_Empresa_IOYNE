import { Card } from "../util/Card"
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { FormBody } from "../user/CreateUser";



export const Setting = () => {

    const [updateUser, setUpdateUser] = useState({
        id: 1,
        username: 'victorboli',
        password: 'contrasenavictor',
        email: 'correovictor',
        rol: 'Admin'
    });

    const onSutmit = () =>{
        console.log(updateUser);
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