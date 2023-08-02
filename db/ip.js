export default function handler(req, res) {
  res
    .status(200)
    .json({ ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress });
}
