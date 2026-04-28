module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  let parsedBody = {};

  try {
    parsedBody =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  } catch (_error) {
    return res.status(400).json({ message: "Invalid request body." });
  }
  const { name, company, email, phone, requirement } = parsedBody;

  if (!name || !email || !phone || !requirement) {
    return res.status(400).json({
      message: "Please provide name, email, phone, and requirement.",
    });
  }

  return res.status(200).json({
    message: "Inquiry received",
    data: {
      name: name || "",
      company: company || "",
      email: email || "",
      phone: phone || "",
      requirement: requirement || "",
    },
    note: "This is a starter endpoint. Connect email/CRM handling in next iteration.",
  });
};
