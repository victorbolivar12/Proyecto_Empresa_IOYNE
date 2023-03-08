import { AuthContext } from './../application/AuthContext';
import { useContext, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import logo from './../assets/Logoo.png'
import { useNavigate } from 'react-router-dom';
import { URL_AUTH } from '../endpoint/EndPoint';
import axios from 'axios'

export const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [intentos,setIntentos] = useState(0)
  const [authError,setAuthError] = useState(false);
  
  const [dataLogin, setDataLogin] = useState({
    email:'',
    password: ''
  });

  const handleInputChange = (e) =>{
    const target = e.target
    const value = target.value;
    const name = target.name

    setDataLogin({...dataLogin, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await axios.post(URL_AUTH,dataLogin)
      login(user.data.user)
      console.log(user.data.user);
      navigate('/dashboard/*')
    } catch (error) {
      setAuthError(true)
      setIntentos(intentos+1)
    }
    
  };


  return (
    <>
      <Card className="w-25 mx-auto mt-5 shadow p-3 mb-5 bg-body rounded" style={{ height: "600px"}}>
        <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
          <img src={logo} alt="LogoEmpresa" style={{ maxWidth: '50%', maxHeight: '50%', background:'#06aed5', padding: '5px', borderRadius:'50%' }}></img>
          <Card.Title style ={{marginTop:'10px'}} className='mb-4 text-center'>EMPRESA IOYNE</Card.Title>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Correo</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Ingrese Correo" 
                name = 'email'
                onChange={handleInputChange}
              />
              <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Contraseña"
                name = 'password'
                onChange={handleInputChange}  
              />

            </Form.Group>

            <Button onClick={handleSubmit} className="d-flex justify-content-center" variant="primary" type="submit">
              Iniciar Seccion
            </Button>
            {authError && <p style={{marginTop:'10px', color:'red', textAlign:'center'}}>Credenciales Incorrectas, Intentos:{intentos}</p>}
            {intentos >= 3 && <p style={{marginTop:'10px', color:'red', textAlign:'center'}}>Usuario bloqueado</p>}
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}
