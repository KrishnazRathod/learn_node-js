import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log("greetHandler: ", name);
}

function goodbyeHandler(name) {
  console.log("goodbyeHandler: ", name);
}

// Register event listner

myEmitter.on("greet", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// emit event
myEmitter.emit("greet", "john");
myEmitter.emit("goodbye", "john");

//erro handling
myEmitter.on("error", (err) => {
  console.log("err: ", err);
});

//simulate error
myEmitter.emit("error", "Something went wrong");
