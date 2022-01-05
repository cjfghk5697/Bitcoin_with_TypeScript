const name ="Han",
    age=21,
    gender="male"
const sayHi=(name,age,gender)=>{
    console.log(`hello ${name}, you are ${age}, gender ${gender}`)
};
//argument가 하나 없어도 작동함
sayHi(name, age); //뭐가 없는지도 알려줌
//결과-> hello han, you are age 21, undefined
export {}; //-> typestript 법칙. 어딘가에 선언하면 됨.