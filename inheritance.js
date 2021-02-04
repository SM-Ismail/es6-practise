class Parent{
    constructor(){
        this.fathersName = 'korim mia';
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullname(){
        return this.name+" "+this.fathersName;
    }
}
const baby = new Child('Arnold');
const baby2 = new Child('Tom');

console.log(baby.getFullname());
// console.log(baby2);