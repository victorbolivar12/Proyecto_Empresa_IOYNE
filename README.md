# EMPRESA IOYNE
<p align="center">
  <img src="https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Logoo.png" width="400" height="400">
</p>
The main objective of the project is to develop a cloud platform that allows IOYNE to effectively manage its relationship with customers. The platform will be custom designed to meet the specific needs of the company and will focus on user, customer and quote management. The platform will be developed using state-of-the-art technologies and will be hosted in the cloud to ensure scalability and accessibility. The platform will feature an intuitive and easy-to-use user interface that will allow IOYNE employees to easily access and manage customer data, quotes and leads.

## Used technology
- React
- Express
- Sequelize
- Postgres sql

## functionalities
- Login: This functionality allows users to authenticate themselves in the web application, which gives them access to all the functionalities and features of the system
- Dashboard: The dashboard is the main screen of the web application, where users can see an overview of users, customers and quotes
- Crud users: This functionality allows administrator users to perform CRUD operations (create, read, update and delete) on the information of other users
- Crud of products: With this functionality, users can perform CRUD operations on the information of the products on the platform.
- Customer Crud: Customer CRUD functionality allows users to perform CRUD operations on customer information
- Quotes Crud: allows users to perform CRUD operations on the quotes information
- Send Email: Allows the user to send an email with the information of a quote in HTML format
- Graphics: analysis and report that will allow IOYNE to monitor the performance of the sales team

## Project Screenshots
### Login
This functionality allows users to authenticate themselves to the web application, which gives them access to all the functionalities and features of the system. Login is done using an authentication form, and additional security features are included to ensure authorized access to the platform.
![login](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Login.png)

### Dasboard
The dashboard is the main screen of the web application, where users can see an overview of the races, runners and sponsors involved in each event. The information is presented in graphs, tables and other visual elements, allowing quick and easy visualization of the relevant data.
![dasboard](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Dashboard.png)

### List of Quotes 
This function allows you to carry out operations of creating, editing, deleting and listing quotes. The quote controller automatically takes care of calculating information such as subtotal, total, shipping cost, and discount.
The shipping cost is calculated using a formula that takes into account the number of products added to the quote and the weight of each one, multiplying the total weight by the cost per kilogram set at $2 per kilogram.
Regarding the discount, its application will depend on the selected option. If it is a percentage discount, 10% will be subtracted from the total amount of the quote, while if it is a fixed amount discount, $50 will be subtracted.
The subtotal will be calculated using the formula: "Total price of all products - discount".
Finally, the total will be obtained by adding the subtotal plus the shipping price.
![quote](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Lista%20de%20cotizaciones.png)

### Send Mail
This function allows you to send a quote to the email address of the customer associated with a quote
![email](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/Cotizacion%20correo.png)

### graphics
The Graphics functionality in IOYNE consists of an analysis and reporting tool that allows you to track the performance of the sales team. This function collects relevant information and presents it in the form of graphs so that managers and administrators of the company can easily visualize and analyze it.
![grafic](https://github.com/victorbolivar12/Proyecto_Empresa_IOYNE/blob/main/cliente-react/src/assets/GRAFICAS.png)

## Installation and configuration
### Previous requirements
Before installing and configuring the application, you must ensure that you have the following tools and components installed on your machine:
- Node.js (version 14 or higher)
- npm (included with Node.js) or Yarn

### Facility
To install and configure the app, follow the steps below after confirming that you have the prerequisites installed:

1. Clone the project repository from GitHub with the following command: <code>git clone https://github.com/victorbolivar12/IOYNE_Company_Project.git</code>.
2. Access the project directory through the terminal with the command <code>cd Proyecto_Empresa_IOYNE</code>.

#### EXPRESS CONFIGURATION
3. Access the Express server folder with the command <code>cd express-server</code>.
4. Install the server dependencies with the <code>npm install</code> command.
5. Start the server with the <code>npm run dev</code> command.

#### REACT CONFIGURATION
In another terminal,
6. Access the React client folder with the command <code>cd client-react</code>.
7. Install the React client dependencies with the <code>npm install</code> command.
8. Start the React server with the <code>npm run dev</code> command.

#### DATABASE CONFIGURATION AND SERVER
In the server folder create an .env file and configure the database and server information for example
<code>
PORT = 3000
DATABASE = name_database
PASSWORD = password_database
USER = postgres
HOST = localhost
JWT_SECRET = secret
</code>

