import { User } from "./models/User";

const me = User.createWithDefaultConfig({
  name: "Gregory House",
  age: 45
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
