function DataEncapsulation(){
    this.data = 500
    let x = 200;
    this.increment = ()=>{
        this.data++;
        console.log("Increment : "+this.data +"  "+x);
    }
    this.decrement = ()=>{
        this.data--;
        console.log("Decrement : "+this.data);
    }
}

let obj = new DataEncapsulation(); // obj : {data: 500}
obj.increment();
obj.increment();
obj.increment();
obj.decrement();
obj.decrement();
obj.decrement();