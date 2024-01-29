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
    { expiresIn: "40m" }
  );
};

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    res.status(401).json("Invalid username or password");
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

app.listen(5000, () => console.log("Listening on port 5000"));
