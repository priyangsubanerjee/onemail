import connectDatabase from "@/db/connect";
import credential from "@/db/credential";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "POST":
      await connectDatabase();
      const { name, email, password, description, admin } = JSON.parse(
        req.body
      );
      let n = new credential({
        admin,
        name,
        email,
        password,
        description,
      });
      try {
        await n.save();
        res.status(200).json({ success: true, message: "Credential created" });
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
