import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      replyTo: email,                                   
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Message: ${subject}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.log("EMAIL ERROR:", error);
    res.json({ success: false, message: "Email sending failed", error });
  }
});

export default router;
