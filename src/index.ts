import { User } from "./models/User";

interface UserProps {
  name?: string;
  age?: number;
}

const me = new User({})

// console.log(me.get("name"));
// console.log(me.get("age"));

// me.set({name:"Zub"})
// console.log(me.get("name"));

// me.set({age: 23})
// console.log(me.get("age"));

me.on("change",()=>{
  console.log("#1 Change event was triggered")
});
me.on("change",()=>{
  console.log("#2 Change event was triggered")
});
me.on("change",()=>{
  console.log("#3 Change event was triggered")
});

console.log(me);

me.trigger("change");