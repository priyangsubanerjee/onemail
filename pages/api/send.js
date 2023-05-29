import connectDatabase from "@/db/connect";
import credential from "@/db/credential";
import NextCors from "nextjs-cors";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const method = req.method;

  switch (method) {
    case "POST":
      const { to, html, subject, text, secret } = req.body;
      console.log(req.body);
      await connectDatabase();
      const client = await credential.findOne({ secret });
      client.views = client.views + 1;
      if (client) {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: client.email,
            pass: client.password,
          },
        });
        var options = {
          from: `${client.name} <${client.email}>`,
          to,
          subject,
          html,
          text,
        };

        let response = await transporter.sendMail(options);
        if (response) {
          res.status(200).json({ success: true, message: "Email sent" });
        } else {
          res
            .status(500)
            .json({ success: false, message: "Something went wrong" });
        }
      }
      await client.save();
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
