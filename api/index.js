const axios = require("axios");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { webhookUrl, data } = req.body;

  if (!webhookUrl || !data) {
    return res.status(400).json({ message: "Missing webhookUrl or data" });
  }

  try {
    const response = await axios.post(webhookUrl, data);
    return res.status(200).json({ message: "Success", response: response.data });
  } catch (error) {
    return res.status(500).json({ message: "Failed to call webhook", error: error.message });
  }
}
