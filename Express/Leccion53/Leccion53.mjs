import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>")
})

app.get("/about", (req, res) => {
  res.send("<h1>Sobre mi</h1><p>My nombre es Carlos</p>")
})

app.get("/contact", (req, res) => {
  res.send("<h1>Contactame</h1><p>Phone: +2347438834</p>")
})

app.post("/register", (req, res) => {
  res.sendStatus(201)
})

app.put("/user/carlos", (req, res) => {
  res.sendStatus(200)
})

app.patch("/user/carlos", (req, res) => {
  res.sendStatus(200)
})

app.delete("/user/carlos", (req, res) => {
  res.sendStatus(200)
})