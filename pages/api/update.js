import connectDatabase from "@/db/connect";
import credential from "@/db/credential";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "POST":
      await connectDatabase();
      const { _id, name, email, password, description } = JSON.parse(req.body);
      try {
        let credentials = await credential.findOne({
          _id,
        });
        credentials.name = name;
        credentials.email = email;
        credentials.password = password;
        credentials.description = description;
        await credentials.save();
        res.status(200).json({
          success: true,
          message: "Credential updated",
          credentials,
        });
      } catch (error) {
        res
          .status(500)
          .json({ success: false, message: "Something went wrong" });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
