const server = require("./src/server");
const { Character } = require("./src/database");

const PORT = 8004;

server.listen(PORT, () => {
  console.log(`Database listening on port ${PORT}`);
});
