import { User } from "./models/User";
import { Attributes } from "./models/Attributes";

const me = new User({
  id: 23,
  name: "Zubair",
  age:12
})

me.get("id");

me.on("change",()=>{
  console.log("user data has changed!")
})

setTimeout(() => {
  me.set({
    name: "Zubair"
  })
}, 3000);
