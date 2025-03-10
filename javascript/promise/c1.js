class Message{
    m1(){
        console.log("GM...");
    }
    m2(){
        console.log("GN....");
    }
    static wish(){
        console.log("Hello Friends...");
    }
}

let obj = new Message();
obj.m1();
obj.m2();
Message.wish();