import type { NextApiRequest, NextApiResponse } from 'next'

export default function (
    req: NextApiRequest, 
    res: NextApiResponse
) {

    const nodemailer = require('nodemailer');
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