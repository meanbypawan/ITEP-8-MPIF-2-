import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener("data",()=>{
    console.log("data event caught....");
});

eventEmitter.emit("data");
eventEmitter.emit("data");
eventEmitter.emit("data");