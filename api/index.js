import express from "express";

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    email: "fahmiazzuhri@example.com",
    password: "123456789",
    isAdmin: true,
  },
  {
    id: 2,
    email: "azzuhri@example.com",
    password: "123456789",
    isAdmin: false,
  },
];

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    res.status(401).json("Invalid email or password");
  } else {
    res.json(user);
  }
});

app.listen(5000, () => console.log("Listening on port 3000"));
