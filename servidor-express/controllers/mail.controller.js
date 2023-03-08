import nodemailer from "nodemailer";
import {qoutes} from './../data/data.js'
import{
  user,
  pass,
  from,
  to,
  subject,
} from './../data/emailConection.js'

export const sendMail = async (req, res) => {
  const { id } = req.params;

  const quoteSelected = qoutes[id-1];
  
  console.log(quoteSelected);

  const HTML_MAIL = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cotizacion</title>
  </head>
  <body>
      <h1 style="font-size: 30px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:#116b89 ;">
          COTIZACION EMPRESA IOYNE
      </h1>
      <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles del Cliente:</h2>
      <p>
        <span>Nombre</span>: ${quoteSelected.costumerId.nombre}<br/>
        <span>Correo</span>: ${quoteSelected.costumerId.correo}<br/>    
        <span>Telefono</span>: ${quoteSelected.costumerId.telefono}<br/>    
        <span>Direccion</span>: ${quoteSelected.costumerId.direccion}<br/>
      </p>
  
      <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles del Usuaio:</h2>
      <p>
        Nombre: ${quoteSelected.userId.username}<br/>    
        Correo: ${quoteSelected.userId.correo}<br/>
      </p>
  
      <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles de los Productos:</h2>
      <ul>
          ${
            quoteSelected.productos.map((element)=>{
              return(
                `<li>NOMBRE: ${element.nombre}  DETALLE: ${element.detalle}   CANTIDAD: ${element.cantidad}</li>`
              )
            })
          }
      </ul>
  
      <h3 style="font-size: 30px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:red ;">Total a Pagar: ${quoteSelected.total}</h3>
  
  </body>
  </html>
  `

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: HTML_MAIL,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error al enviar el correo electrónico");
    } else {
      console.log("Correo electrónico enviado: " + info.response);
      res.status(200).send("Correo electrónico enviado con éxito");
    }
  });
};
