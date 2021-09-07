import type { NextApiRequest, NextApiResponse } from 'next'
import mailDataFile from './mail.json';

interface mailMessage {
    name: String,
    email: String,
    text: String
}

export default async function (
    req: NextApiRequest, 
    res: NextApiResponse
) {

    const nodemailer = require('nodemailer');
    const fs = require('fs');

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            type: "login",
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        },
        secure: true,
    })
    
    const mailCredentialsForFile: mailMessage = {
        name: req.body.name,
        email: req.body.email,
        text: req.body.message
    }
    
    const newMailDataFile = [...mailDataFile, mailCredentialsForFile];

    fs.writeFileSync('./src/pages/api/mail.json', JSON.stringify(newMailDataFile))

    const mailData = {
        from: req.body.email,
        to: process.env.NODEMAILER_USER,
        subject: `New Message via Portfolio From ${req.body.name}`,
        text: req.body.message + " | Sent by: " + req.body.email,
        html: `<div>${req.body.message}</div><p>Sent by:
        ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err) {
            res.status(400).json({
                status: 0
            })
        } else {
            res.status(200).json({
                status: 1
            })
        }
    });
}