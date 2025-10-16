//parent class
class Vehicles{
    constructor(name) {
        this.name = name;
    }
    start(){//makes a sound
        console.log(`${this.name} is starting`);
    }
}
//maruthi child class(inherit from vehicles)
class maruti extends Vehicles{
    constructor(name,model){
        super(name);//inorder to invoke parent (//call the parent call constructor)
        this.model = model;
    }
    //override speak method (polyformism)
    display(){
        console.log(`${this.model} is a type  of  ${this.name} `);
        
    }
}

const Models = new maruti ("car "," Maruti Swift"," Maruti Baleno"," Maruti Fronx "," Maruti Brezza "," Maruti Dzire ","Maruti Alto K10" , "Maruti Wagon");
Models.start();
Models.display();
