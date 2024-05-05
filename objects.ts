let Users = {
  name: "ali",
  email: "a@gmail.com",
  isActive: true,
};

function CreateUser({ name: string, isPaid: boolean }) {}

let NewUser = { name: "khan", isPaid: true, email: "h@handleerror.com" };
createUser(newUser);
console.log(newUser);
function CreateCourse(): { coursename: string; courseprice: number } {
  return { coursename: "CS", courseprice: 55 };
}

type user = {
  readonly id: string;
  name: string;
  email: string;
  isactive: boolean;
  creaitcard?: number;
};

let myuser: user = {
  id: "123",
  name: "ali",
  email: "a@a.com",
  isactive: false,
};

type CardNumber = {
  cardno: string;
};

type CardDate = {
  carddate: number;
};

type CardDetails = CardNumber &
  CardDate & {
    CVV: number;
  };

myuser.email = "ali@gmail.com";
// myuser.id='55'
