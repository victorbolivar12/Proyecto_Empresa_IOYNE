import nodemailer from "nodemailer";
//import {qoutes} from './../data/data.js'
import quoteModel from "../models/quote.module.js";
import quoteProductModel from "../models/quote_product.module.js";
import customerModule from "../models/customer.module.js";
import productModule from "../models/product.module.js";
import UserModule from "../models/user.module.js";
import{
  user,
  pass,
  from,
  to,
  subject,
} from './../data/emailConection.js'

export const sendMail = async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await quoteModel.findOne({
      where: { id },
      include: [
        {
          model: UserModule,
          attributes: ["id", "username", "email"],
        },
        {
          model: customerModule,
          attributes: ["id", "nombre", "apellido", "correo", "telefono", "direccion"],
        },
        {
          model: productModule,
          attributes: ["id", "nombre", "precio", "detalle"],
          through: {
            attributes: ["cantidad"],
          },
        },
      ],
    });

    if (!quote) {
      return res.status(404).json({ message: "Cotización no encontrada." });
    }

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

        <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles de la  cotizacion:</h2>
        <p>
          <span>FECHA</span>: ${quote.fecha}<br/>
          <span>PRECIO DE ENVIO</span>: ${quote.precio_envio}<br/>    
          <span>DESCUENTO</span>: ${quote.descuento}<br/>    
          <span>SUBTOTAL</span>: ${quote.subtotal}<br/>    
          <span>TOTAL</span>: ${quote.total}<br/>
        </p>
        
        <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles del Cliente:</h2>
        <p>
          <span>NOMBRE</span>: ${quote.customer.nombre}<br/>
          <span>APELLIDO</span>: ${quote.customer.apellido}<br/>    
          <span>CORREO</span>: ${quote.customer.correo}<br/>    
          <span>TELEFONO</span>: ${quote.customer.telefono}<br/>    
          <span>DIRECCION</span>: ${quote.customer.direccion}<br/>
        </p>
    
        <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles del Usuaio:</h2>
        <p>
          NOMBRE: ${quote.user.username}<br/>    
          CORREO: ${quote.user.email}<br/>
        </p>
    
        <h2 style="font-size: 20px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; color:blue ;">Detalles de los Productos:</h2>
        <ul>
            ${
              quote.products.map((element)=>{
                return(
                  `<li>
                      NOMBRE: ${element.nombre}<br/>   
                      DETALLE: ${element.detalle}<br/>     
                      CANTIDAD: ${element.quotes_products.cantidad}<br/>  
                      PRECIO:${element.precio}<br/>
                   </li>`
                )
              })
            }
        </ul>
  
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
      to: quote.customer.correo,
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

    res.status(200).json({ message: "Correo Enviado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al enviar correo." });
  }
};
