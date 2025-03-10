class Area{
    constructor(l,w){
        this.l = l;
        this.w = w;
    }
    getArea(){
        return this.l*this.w;
    }
}

class Volume extends Area{
    constructor(l,w,h){
      super(l,w);
      this.h = h;
    }
    getVolume(){
        return this.getArea() * this.h;
    }
}

let obj = new Volume(2,3,4);
console.log("Area : "+obj.getArea());
console.log("Volume : "+obj.getVolume());
