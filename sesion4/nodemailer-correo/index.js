const nodeMailer = require('nodemailer')

// Configuraciones
    const transporter = nodeMailer.createTransport({
        service: 'outlook',
        auth: {
        user: 'ap212775@alumno.udb.edu.sv',
        pass: '********'
        }
    });
  
// Detalles del correo
  const mailOptions = {
    from: 'ap212775@alumno.udb.edu.sv',
    to: 'j.william03@hotmail.com',
    subject: ' Implementación de servidor de correos.',
    text: ' ¡Servidor de correo funcionando excelente! Hola Ingeniero, ya complete mi reto, soy Henry Agustin'
  };
  
// Enviar correo
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });