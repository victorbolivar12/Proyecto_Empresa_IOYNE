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
![dasboard](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Dashboard.png)

### Lista de Cotizaciones 
Esta función permite llevar a cabo operaciones de creación, edición, borrado y listado de cotizaciones. El controlador de cotizaciones se encarga automáticamente de calcular información como el subtotal, el total, el costo de envío y el descuento.
El costo de envío se calcula mediante una fórmula que toma en cuenta el número de productos añadidos a la cotización y el peso de cada uno, multiplicando el peso total por el costo por kilogramo establecido en $2 por kilogramo.
En cuanto al descuento, su aplicación dependerá de la opción seleccionada. Si se trata de un descuento porcentual, se restará el 10% del monto total de la cotización, mientras que si se trata de un descuento en monto fijo, se restarán $50.
El subtotal se calculará a través de la fórmula: "Precio total de todos los productos - descuento".
Por último, el total se obtendrá sumando el subtotal más el precio de envío.
![quote](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Lista%20de%20cotizaciones.png)

### Enviar Correo
Esta funcion permite enviar una cotizacion al correo electronico al cliente asociado a una cotizacion 
![email](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Cotizacion%20correo.png)

### Graficas
La funcionalidad de Gráficas en IOYNE consiste en una herramienta de análisis y reporte que permite hacer un seguimiento del desempeño del equipo de ventas. Esta función recopila información relevante y la presenta en forma de gráficas para que los gerentes y administradores de la empresa puedan visualizarla y analizarla de manera sencilla.
![grafic](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/GRAFICAS.png)

## Instalación y configuración
### Requisitos Previos
Antes de instalar y configurar la aplicación, debes asegurarte de tener las siguientes herramientas y componentes instalados en tu máquina:
- Node.js (versión 14 o superior)
- npm (incluido con Node.js) o Yarn

### Instalación
Para instalar y configurar la aplicación, sigue los siguientes pasos después de haber confirmado que tienes los requisitos previos instalados:

1. Clona el repositorio del proyecto desde GitHub con el siguiente comando: <code>git clone https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE.git</code>.
2. Accede al directorio del proyecto mediante la terminal con el comando <code>cd Proyecto_Empresa_IOYNE</code>.

#### Configuración de Express
3. Accede a la carpeta del servidor Express con el comando <code>cd servidor-express</code>.
4. Instala las dependencias del servidor con el comando <code>npm install</code>.
5. Inicia el servidor con el comando <code>npm run dev</code>.

#### Configuración de React
En otra terminal,
6. accede a la carpeta del cliente React con el comando <code>cd cliente-react</code>.
7. Instala las dependencias del cliente React con el comando <code>npm install</code>.
8. Inicia el servidor React con el comando <code>npm run dev</code>.

### Ejecucion
Para ejecutar la aplicación, una vez instaladas las dependencias del proyecto, deberás seguir los siguientes pasos: 
- Para iniciar el servidor de Express, dirígete a la terminal y ejecuta el comando correspondiente. El servidor estará disponible en el puerto 5000 y la aplicación se abrirá automáticamente en tu navegador web en la dirección: <code>http://localhost:5000</code>.
- Para iniciar el servidor de React, deberás abrir una nueva terminal y ejecutar el comando correspondiente. La aplicación se abrirá en tu navegador web en la dirección <code>http://127.0.0.1:5173/</code>. 
