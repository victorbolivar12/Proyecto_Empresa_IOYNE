import { MdDashboard, FaUsers, IoIosCard, AiTwotoneSetting, MdOutlineSupervisedUserCircle, FaReadme, RiLogoutBoxFill } from 'react-icons/all'
import { ListProducts } from './../../components/products/ListProducts'
import { ListCostumer } from '../../components/client/ListCostumer'
import { ListQuotes } from './../../components/quotes/ListQuotes'
import { Setting } from './../../components/setting/Setting'
import { ListUsers } from '../../components/user/ListUsers'
import { Link, Route, Routes } from "react-router-dom";
import { Home } from '../../components/home/Home'
import logo from './../../assets/logoo.png'
import './style.css'
import { AuthContext } from './../../application/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {

  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
 

  let options = { day: 'numeric', month: 'long', year: 'numeric' }
  let CurrentDate = new Date().toLocaleDateString('es-ES', options);

  const menuLinks = [
    { title: 'Dashboard', path: '*', icon: MdDashboard, component: Home },
    { title: 'Productos', path: 'productos', icon: IoIosCard, component: ListProducts },
    { title: 'Cotizaciones', path: 'cotizaciones', icon: FaReadme, component: ListQuotes },
    { title: 'Clientes', path: 'clientes', icon: MdOutlineSupervisedUserCircle, component: ListCostumer },
    { title: 'Configuracion', path: 'configuracion', icon: AiTwotoneSetting, component: Setting },
    { title: 'Cerrar Seccion', path: '/', icon: RiLogoutBoxFill }
  ]

  return (

    <div className="page">
      {/* ---Header Dashboard--- */}
      <header>
        <h1 style={{fontSize:'18px', color:'#116b89', fontWeight:'600'}}>BIENVENIDO AL PANEL DE CONTROL  {user != null ? user.username.toUpperCase(): navigate('/')}</h1>
        <p>{CurrentDate}</p>
      </header>

      {/* ---Aside Dashboard--- */}
      <aside>
        <div className="header_aside">
          <img src={logo} alt="LogoEmpresa" style={{ maxWidth: '100%', maxHeight: '100%' }}></img>
          <span>Empresa IOYNE</span>
        </div>
        <ul className='list_dashboard'>
          {
            user != null ? (
              user.rol == 'Admin' && <Link to='usuarios'><li><a><FaUsers/>Usuarios</a></li></Link>
            ): navigate('/')
          }
          {
            menuLinks.map((link)=>{
              return(
                <Link to={link.path}><li><a><link.icon/>{link.title}</a></li></Link>
              )
            })
          }
        </ul>
      </aside>

      {/* ---Main Dashboard--- */}
      <main>
        <Routes>
          {
            menuLinks.map((link)=>{
              return(
                <Route path= {'/'+link.path} element={<link.component/>}/>
              )
            })
          }
          <Route path='/usuarios' element={<ListUsers/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}
