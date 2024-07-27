import dotenv from "dotenv";
import http from "http";
dotenv.config();
const PORT = process.env.PORT;
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

const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

const requestHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

const createUserHandler = (req, res) => {
  let body = "";
  // Listen Data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    req.statusCode === 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const userHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((item) => item.id === parseInt(id));
  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route Not Fond" }));
  }
  res.end();
};

const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Route Not Found" }));
  res.end();
};

const server = http.createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        requestHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        userHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`server is running: on ${PORT}`);
});
