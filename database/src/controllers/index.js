const { catchedAsync } = require("../utils");

module.exports = {
  getModel: catchedAsync(require("./getModel")),
  getById: catchedAsync(require("./getById")),
};
