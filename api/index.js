import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    username: "fahmiazzuhri",
    password: "123456789",
    isAdmin: true,
  },
  {
    id: 2,
    username: "azzuhri",
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
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
      },
      "jwtkey"
    );
    res.json({
      ...user,
      accessToken,
    });
  }
});

app.listen(5000, () => console.log("Listening on port 3000"));
