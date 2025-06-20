let x = {
    m1: function(){
        console.log("GM...");
    }
};

x.__proto__.m2 = function(){
    console.log("GN....");
}

x.m1();
x.m2();