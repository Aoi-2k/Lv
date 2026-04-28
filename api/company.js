module.exports = function handler(_req, res) {
  res.status(200).json({
    name: "LV Industrial Solutions",
    scope: ["Home Page", "About Page", "Contact Page"],
    stack: "MERN (Vite frontend + Node API functions)",
    positioning:
      "Supplier and solution provider of process control instruments for industrial process markets.",
  });
};
