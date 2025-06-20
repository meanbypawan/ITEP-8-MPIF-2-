let animal = {
    speak:()=>{
        console.log("I can speak..");
    }
}

let dog = {
    bark:()=>{
        console.log("Bhow Bhow...");
    }
}

Object.setPrototypeOf(dog,animal);
dog.speak();
dog.bark();