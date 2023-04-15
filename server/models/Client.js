const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: "string",
  },
  email: { type: "string" },
  phone: { type: "string" },
});

module.exports = mongoose.model("Client", ClientSchema);
