
export {};


const sayHi=(name:string,age:number,gender:string) : string=>{
    return `hello ${name}, you are ${age}, gender ${gender}`
}; // : string을 추가하여 string을 return하는 것을 알려줌
//argument 형에 맞게 알려줌
sayHi("han", 444,"male"); //tslint 확장앱으로 뭐가 잘못되면 오류 알려줌
