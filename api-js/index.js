import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://micommerce.vercel.app"],
  })
);

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

let refreshTokens = [];

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      isAdmin: user.isAdmin,
    },
    "jwtkeyrefresh"
  );
};

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      isAdmin: user.isAdmin,
    },
    "jwtkeyaccess",
    { expiresIn: "40s" }
  );
};

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    res.status(401).json("Invalid email or password");
  } else {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    refreshTokens.push(refreshToken);
    res.json({
      ...user,
      accessToken,
      refreshToken,
    });
  }
});

app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  const searchUsers = users.find((user) => user.email === email);
  if (searchUsers) {
    return res.status(400).json("user already taken");
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
  };

  users.push(newUser);

  const accessToken = generateAccessToken(newUser);
  const refreshToken = generateRefreshToken(newUser);

  refreshTokens.push(refreshToken);

  return res.json({
    ...newUser,
    accessToken,
    refreshToken,
  });
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "jwtkeyaccess", (err, user) => {
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

app.delete("/api/users/:userId", verify, (req, res) => {
  if (req.user.id === req.params.userId || req.user.isAdmin) {
    res.status(200).json("User has been deleted");
  } else {
    res.status(403).json("You can delete only your account");
  }
});

app.post("/api/refresh", (req, res) => {
  const refreshToken = req.body.token;

  if (!refreshToken) {
    return res.status(401).json("You are not authenticated");
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh token is not valid");
  }
  jwt.verify(refreshToken, "jwtkeyrefresh", (err, user) => {
    if (err) {
      console.log(err);
    }
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    const newRefreshToken = generateRefreshToken(user);
    const newAccessToken = generateAccessToken(user);

    refreshTokens.push(newRefreshToken);
    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("Logged out successfully");
});
app.listen(5000, () => console.log("Listening on port 5000"));
