function twonumbers(num: number): number {
  return num + 2;
  // return "hello";
}

function Name(name: string) {
  return name.toUpperCase();
}

function isUserLogin(name: string, email: string, ispaid: boolean) {}

let gethello = (s: string): string => {
  return (s = "");
};

const heros = ['1', '2', '3'];

heros.map((hero):string => {
  // return `names ${heros}`;
  return '2'
});

// function getval(myval:number):boolean{
//   if(myval>5){
//     return true
//   }
//   return "200 ok"
// }

function geterror(errmsg:string):void{
  console.log(errmsg)
}

function handleerror(msg:string):never{
    throw new Error(msg);

}

isUserLogin("ali", "ali@gmail.com", true);
Name("nouman");
let sum = twonumbers(5);
console.log(sum);
