module.exports = function handler(_req, res) {
  res.status(200).json({
    status: "ok",
    service: "lv-industrial-solutions-api",
    timestamp: new Date().toISOString(),
  });
};
