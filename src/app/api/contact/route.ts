import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { contactMessage } from '@/lib/definition';

export async function POST(request: Request) {
    const formDate = await request.formData();
    const data = Object.fromEntries(formDate.entries());
    const message: contactMessage = {
        name: data.name as string,
        email: data.email as string,
        phone: data.phone as string,
        service: data.service as string,
        projectDetails: data.projectDetails as string,
    };
    console.log(message)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER!,
            pass: process.env.GMAIL_PASS!,
        },
    });

    const mailOptions = {
        from: message.email,
        to: process.env.GMAIL_USER,
        subject: `${message.service} REQUEST FROM ${message.name}`,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #007BFF;">New Service Request</h2>
            <p>Hello, I am <strong>${message.name}</strong> and I came across your website. I am interested in your Digital Services.</p>
            <p><strong>Service Requested:</strong> ${message.service}</p>
            <p><strong>Project Details:</strong></p>
            <p>${message.projectDetails}</p>
            <p>You can reach me at:</p>
            <ul>
                <li><strong>Phone:</strong> ${message.phone}</li>
                <li><strong>Email:</strong> ${message.email}</li>
            </ul>
            <p>Regards,</p>
            <p><strong>${message.name}</strong></p>
        </div>
    `,
    };

    const noReplyOptions = {
        from: process.env.GMAIL_USER,
        to: message.email,
        subject: `Thank you for contacting me`,
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #007BFF;">Thank You for Reaching Out</h2>
            <p>Hello <strong>${message.name}</strong>,</p>
            <p>Thank you for reaching out to me. I have received your request for <strong>${message.service}</strong> service.</p>
            <p>I will get back to you as soon as possible.</p>
            <p>Regards,</p>
            <p><strong>Michael Agonsi</strong></p>
        </div>
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(noReplyOptions);
        return NextResponse.json({ message: "Message sent successfully" });
    
    }catch(err){
        console.log("Error sending email:", err);
        return NextResponse.json({message: "Error sending email"}, {status: 500});	
    }
}