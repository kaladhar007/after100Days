const express = require("express");
const app = express();
let addDays = require("date-fns/addDays");
app.listen(3000);

app.get("/", (request, response) => {
  let date = new Date();
  let result = addDays(date, 100);
  let year = result.getFullYear();
  let month = result.getMonth() + 1;
  let day = result.getDate();
  let final = `${day}/${month}/${year}`;
  response.send(final);
  console.log(typeof final);
});

module.exports = app;
