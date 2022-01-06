class Human{
    public name: string;
    public age: number;
    private gender:string; //private형으로 클래스 내부에서만 사용가능
    constructor(name:string,age:number,gender?:string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}
const lynn=new Human("Han",18,"male");


const sayHi=(person:Human) : string=>{
    return `hello ${person.name}, you are ${person.age}, gender ${person.gender}`
};  //각각 어떤 객체를 가지고 있는지 .name, .age들으로 알수 있음.
sayHi(lynn); 
export {};
