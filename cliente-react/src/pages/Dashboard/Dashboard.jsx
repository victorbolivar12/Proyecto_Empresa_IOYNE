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
export const Dashboard = () => {

  let options = { day: 'numeric', month: 'long', year: 'numeric' }
  let CurrentDate = new Date().toLocaleDateString('es-ES', options);

  const menuLinks = [
    { title: 'Dashboard', path: 'home', icon: MdDashboard, component: Home },
    { title: 'Usuarios', path: 'usuarios', icon: FaUsers, component: ListUsers },
    { title: 'Productos', path: 'productos', icon: IoIosCard, component: ListProducts },
    { title: 'Cotizaciones', path: 'cotizaciones', icon: FaReadme, component: ListQuotes },
    { title: 'Clientes', path: 'clientes', icon: MdOutlineSupervisedUserCircle, component: ListCostumer },
    { title: 'Configuracion', path: 'configuracion', icon: AiTwotoneSetting, component: Setting },
    { title: 'Cerrar Seccion', path: 'logout', icon: RiLogoutBoxFill }
  ]

  return (

    <div className="page">
      {/* ---Header Dashboard--- */}
      <header>Dashboard
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
            menuLinks.map((link)=>{
              return(
                <Link to={link.path}><li><a><link.icon/>{link.title}</a></li></Link>
              )
            })
          }
          {/* <li><a><MdDashboard />Dashboard</a></li>
          <Link to='users'><li><a><FaUsers />Usuarios</a></li></Link>
          <Link to='product'><li><a><FaReadme />Productos</a></li></Link>
          <li><a><IoIosCard />Cotizaciones</a></li>
          <li><a><MdOutlineSupervisedUserCircle />Clientes</a></li>
          <li><a><AiTwotoneSetting />Configuracion</a></li>
          <li><a><RiLogoutBoxFill />Cerrar Seccion</a></li> */}
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
          <Route path='*' element='not Fount'/>
          {/* <Route path='/usuarios' element={<ListUsers/>} />
          <Route path='/productos' element={<ListProducts/>} /> */}
          
        </Routes>
      </main>
    </div>
  )
}
