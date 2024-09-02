const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Configurar transportador de e-mail (Use suas credenciais)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'seu_email@gmail.com',
        pass: 'sua_senha'
    }
});

// Método para enviar convite por e-mail
router.post('/email', (req, res) => {
    const { email, nomeAmigoSecreto } = req.body;

    const mailOptions = {
        from: 'seu_email@gmail.com',
        to: email,
        subject: 'Convite para Amigo Secreto',
        text: `Olá! Você foi convidado para participar de um amigo secreto com ${nomeAmigoSecreto}. Esperamos que você possa participar!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send({ message: 'Erro ao enviar e-mail', error });
        }
        res.send({ message: 'Convite enviado com sucesso', info });
    });
});

module.exports = router;
