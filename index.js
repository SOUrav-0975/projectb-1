const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

app.get("/", (req, res) => {
  return res.json(users);
});

app.get("/user", (req, res) => {
  const html = `<ul>
  ${users.map((el) => `<li> ${el.first_name}</li>`).join("")}
  
  </ul>`;

  res.send(html);
});
app.post("/user", (req, res) => {
  res.json({ status: "pending" });
});

//route
app.route("/user/:id").get((req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);

  res.json(user);
});

app.listen(8080, () => console.log("port is running on 8080"));
