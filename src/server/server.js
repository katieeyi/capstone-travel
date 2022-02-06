//server.js
const app = require("./app");

const port = 8081;
const server = app.listen(port, listening);
//Callback to debug
function listening() {
  console.log(`The server is running on localhost: ${port}`);
}
