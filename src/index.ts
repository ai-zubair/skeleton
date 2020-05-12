import { User } from "./models/User";
import { Attributes } from "./models/Attributes";

const me = new User({
  id: 23,
  name: "Zubair",
  age:12
})

// console.log(me)

// // me.on("change",()=>{
// //   console.log("Change event triggered")
// // })

// // // console.log(me.get("id"));
// // console.log(me.attributes.get("id"));

// // me.trigger("change")
// me.get ()
// // console.log(me.get === Attributes.prototype.get);
console.log(me)
// console.log(me.get = "asdas");
var test = me.get;

// test = "" as string;



// var help = "awesome";

// const test = () => {
//   console.log(this.help);
// }

// const obj = {
//   help: "doomed",
//   test
// }

// obj.test();