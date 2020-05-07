import { User } from "./models/User";

const me = new User({
  name: "Zubair", 
  age: 21
})

console.log(me.get("name"));
console.log(me.get("age"));

me.set({name:"Zub"})