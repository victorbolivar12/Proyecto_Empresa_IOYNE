# EMPRESA IOYNE
<p align="center">
  <img src="https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Logoo.png" width="400" height="400">
</p>
El objetivo principal del proyecto es desarrollar una plataforma en la nube que permita a IOYNE gestionar de manera efectiva su relación con los clientes. La plataforma se diseñará a medida para satisfacer las necesidades específicas de la empresa y se centrará en la gestión de usuarios, clientes y cotizaciones.La plataforma se desarrollará utilizando tecnologías de última generación y se alojará en la nube para garantizar la escalabilidad y la accesibilidad. La plataforma contará con una interfaz de usuario intuitiva y fácil de usar que permitirá a los empleados de IOYNE acceder y gestionar fácilmente los datos de los clientes, las cotizaciones y las oportunidades de venta.

## Tecnologías utilizadas
- React
- Express
- Sequelize
- Postgres sql

## Funcionalidades
- Login: Esta funcionalidad permite a los usuarios autenticarse en la aplicación web, lo que les da acceso a todas las funcionalidades y características del sistema
- Dashboard: El dashboard es la pantalla principal de la aplicación web, en la que los usuarios pueden ver una vista general de los usuarios, clientes y cotizaciones
- Crud de usuarios: Esta funcionalidad permite a los usuario administrador realizar operaciones CRUD (crear, leer, actualizar y eliminar) sobre la información de otros usuarios
- Crud de productos: Con esta funcionalidad, los usuarios pueden realizar operaciones CRUD sobre la información de las productos en la plataforma.
- Crud de clientes:la funcionalidad de CRUD de clientes permite a los usuarios realizar operaciones CRUD sobre la información de los clientes
- Crud de cotizaciones: permite a los usuarios realizar operaciones CRUD sobre la información de las cotizaciones
- Enviar Correo: Permite al usuario enviar un correo electrónico con la informacion de una cotizacion en formato HTML
- Gráficas: análisis y reporte que permitirán a IOYNE hacer un seguimiento del desempeño del equipo de ventas

## Capturas de pantalla
### Login
Esta funcionalidad permite a los usuarios autenticarse en la aplicación web, lo que les da acceso a todas las funcionalidades y características del sistema. El inicio de sesión se realiza mediante un formulario de autenticación, y se incluyen características de seguridad adicionales para garantizar el acceso autorizado a la plataforma.
![login](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Login.png)

### Dasboard
El dashboard es la pantalla principal de la aplicación web, en la que los usuarios pueden ver una vista general de las carreras, corredores y patrocinadores involucrados en cada evento. La información se presenta en gráficos, tablas y otros elementos visuales, lo que permite una visualización rápida y sencilla de los datos relevantes.
![login](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Dashboard.png)

Resto de funcionalidades en desarrollo

## Instalación y configuración
### Requisitos Previos
Antes de instalar y configurar la aplicación, debes asegurarte de tener las siguientes herramientas y componentes instalados en tu máquina:
- Node.js (versión 14 o superior)
- npm (incluido con Node.js) o Yarn

### Instalación
Una vez que hayas confirmado que tienes los requisitos previos instalados, sigue estos pasos para instalar y configurar la aplicación:

1. Clona el repositorio del proyecto desde Github: 
<code>git clone https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE.git</code>.

2. Accede al directorio del proyecto:
<code>cd Proyecto_Empresa_IOYNE</code>

#### Correr Express

3. Acceder a servidor-express
<code>cd servidor-express</code>

4. Instalar las dependencias
<code>npm install</code>

5. Correr el servidor
<code>npm run dev</code>

#### Correr React
En otra terminal

6. Acceder al cliente-react
<code>cd cliente-react</code>

7. Instalar las dependencias
<code>npm install</code>

8. Correr el servidor
<code>npm run dev</code>

### Ejecucion
Una vez que hayas instalado las dependencias del proyecto, puedes iniciar la aplicación 
- El servidor de express: corre en el puerto 5000 y abrirá la aplicación en tu navegador web en la dirección <code>http://localhost:5000</code>
- El servidor de react: abrirá la aplicación en tu navegador web en la dirección <code>http://127.0.0.1:5173/</code> 
