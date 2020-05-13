import { User } from "./models/User";

const me = new User({
  name: "George Clooney",
  age: 55
})

console.log(me.get("name"));
console.log(me.get("age"));

me.on("change",()=>{
  console.log("user data has changed!",me);
})

me.on("save",()=>{
  console.log("user has been saved to the server",me)
})

setTimeout(() => {
  me.save();
}, 3000);
