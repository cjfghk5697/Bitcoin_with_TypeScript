---1강---
const name ="Han",
age=21,
gender="male"
const sayHi=(name,age,gender)=>{
console.log(`hello ${name}, you are ${age}, gender ${gender}`)
};
//argument가 하나 없어도 작동함
sayHi(name, age); //뭐가 없는지도 알려줌
//결과-> hello han, you are age 21, undefined

export {}; //-> typestript 법칙. 어딘가에 선언하면
---2강---

const sayHi=(name:string,age:number,gender:string) : string=>{
    return `hello ${name}, you are ${age}, gender ${gender}`
}; // : string을 추가하여 string을 return하는 것을 알려줌
//argument 형에 맞게 알려줌
sayHi("han", 444,"male"); //tslint 확장앱으로 뭐가 잘못되면 오류 알려줌

--3강--
interface Human{ //interface 추가로 어떤 형인지 알수 있음
    name:string;
    age:number;
    gender:string;
};
const person ={ //내용
    name:"han",
    gender:"male",
    age:21
};


const sayHi=(person:Human) : string=>{
    return `hello ${person.name}, you are ${person.age}, gender ${person.gender}`
};  //각각 어떤 객체를 가지고 있는지 .name, .age들으로 알수 있음.

--4강--
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