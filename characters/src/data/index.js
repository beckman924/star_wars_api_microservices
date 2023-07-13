const axios = require("axios");
const characters = require("./characters.json");

module.exports = {
  list: async () => {
    const results = await axios.get("http://database:8004/Film");
    return results.data;
  },

  create: async () => {
    return characters;
  },
};
