export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { webhookUrl, data } = req.body;

  if (!webhookUrl || !data) {
    return res.status(400).json({ message: "Missing webhookUrl or data" });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.text(); // webhook 응답 확인용
    return res.status(200).json({ message: "Success", response: result });
  } catch (error) {
    return res.status(500).json({ message: "Failed to call webhook", error: error.message });
  }
}
