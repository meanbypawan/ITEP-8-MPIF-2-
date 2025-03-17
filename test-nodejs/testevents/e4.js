import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.addListener("add",(a,b)=>{
    console.log("Addition : "+(a+b));
});
eventEmitter.addListener("sub",(a,b)=>{
    console.log("Subtraction : "+(a-b));
});

eventEmitter.emit("add",20,5);
eventEmitter.emit("add",30,5);
eventEmitter.removeAllListeners("add");
eventEmitter.emit("add",30,5);

eventEmitter.emit("sub",20,5);