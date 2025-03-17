import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener("first",()=>{
    console.log("First event caught...");
});

eventEmitter.on("second",()=>{
    console.log("second event caught...");
});

eventEmitter.once("third",()=>{
    console.log("Third event caught....");
})

eventEmitter.emit("first");
eventEmitter.emit("first");
eventEmitter.emit("second");
eventEmitter.emit("second");
eventEmitter.emit("third");
eventEmitter.emit("third");

