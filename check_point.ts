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
