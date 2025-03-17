import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener("data",()=>{
    console.log("Data event caught....");
});
eventEmitter.addListener("error",()=>{
    console.log("Error event caught....");
});
eventEmitter.addListener("finish",()=>{
    console.log("Finish event caught...");
});

eventEmitter.emit("data");
eventEmitter.emit("finish");
eventEmitter.emit("error");