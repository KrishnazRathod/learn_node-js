import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
const users = [
  {
    id: 1,
    name: "krishna",
  },
  {
    id: 2,
    name: "mohan",
  },
  {
    id: 3,
    name: "radhe",
  },
];

const logger = (req, res, next) => {
  console.log(`${req.method} && ${req.url}`);
  next();
};

app.use(logger);
app.use(express.json()); // This middleware automatically parses JSON bodies

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((item) => item.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User Not Found" });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "Route Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
