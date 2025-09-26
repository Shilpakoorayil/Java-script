const car = {
       brand :"Toyota",
       start : function(){//anomous function
         console.log("Car started");
         
       }
}

car.start();

//example -2
const person = {
    name:"SHILPA KOORAYIL",
    age:24,
    greet:function(){
        console.log(`Hello, my name is  ${this.name}`);

        
    }
}
person.greet();