import './style.css'
import logo from './../../assets/logoo.png'
import { MdDashboard, FaUsers, IoIosCard, AiTwotoneSetting, MdOutlineSupervisedUserCircle, FaReadme, RiLogoutBoxFill } from 'react-icons/all'
import { ListUsers } from '../../components/user/ListUsers'

export const Dashboard = () => {

  let options = { day: 'numeric', month: 'long', year: 'numeric' }
  let CurrentDate = new Date().toLocaleDateString('es-ES', options);

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
          <li><a><MdDashboard />Dashboard</a></li>
          <li><a><FaUsers />Usuarios</a></li>
          <li><a><FaReadme />Productos</a></li>
          <li><a><IoIosCard />Cotizaciones</a></li>
          <li><a><MdOutlineSupervisedUserCircle />Clientes</a></li>
          <li><a><AiTwotoneSetting />Configuracion</a></li>
          <li><a><RiLogoutBoxFill />Cerrar Seccion</a></li>
        </ul>
      </aside>

      {/* ---Main Dashboard--- */}
      <main>
        <ListUsers />
      </main>
    </div>
  )
}
