const FAQ = require("../models/FAQ");

const chatWithBot = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const faq = await FAQ.findOne({
      question: { $regex: message, $options: "i" },
    });

    if (faq) {
      return res.json({
        reply: faq.answer,
        source: "database",
      });
    }

    // Smart fallback (no AI)
    return res.json({
      reply:
        "Sorry, I couldn't find an exact answer. You can ask about admissions, courses, fees, hostel, or placements.",
      source: "fallback",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { chatWithBot };
