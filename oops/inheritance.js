//parent class
class Animal{
    constructor(name) {
        this.name = name;
    }
    speak(){//makes a sound
        console.log(`${this.name} make a sound`);
    }
}
//Dog child class(inherit from animal)
class Dog extends Animal{
    constructor(name,breed){
        super(name);//inorder to invoke parent (//call the parent call constructor)
        this.breed = breed;
    }
    //override speak method (polyformism)
    speak1(){
        console.log(`${this.name} ${this.breed} barks`);
        
    }
}

const dog = new Dog ("Rex","Germen Shepherd");
dog.speak();
dog.speak1();
