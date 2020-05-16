import { UserForm } from "./views/UserForm";
import { User } from "./models/data/User";

const user = new UserForm(
  document.getElementById("app"),
  User.createWithDefaultConfig({
    name: "Zubair",
    age: 21
  })
);
user.render();
// setTimeout(()=>{
//   user.render();
// },3000) 