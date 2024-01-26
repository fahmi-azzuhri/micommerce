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

const verify = (req, res, next) => {
  const authHeader = req.header.authorization;
  if (authHeader) {
    const token = authHeader.split("")[1];
    jwt.verify(token, "jwtkey", (err, user) => {
      if (err) {
        res.status(403).json("Token invalid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not authenticated");
  }
};

app.listen(5000, () => console.log("Listening on port 3000"));
