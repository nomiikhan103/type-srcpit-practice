let arr: string[] = [];
let names: Array<string> = [];
arr.push("saad");

type User = {
  name: string;
  isactive: boolean;
};
const AllUsers: User[] = [];

console.log(arr[0]);
AllUsers.push({ name: "", isactive: true });

console.log(AllUsers);
