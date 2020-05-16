import { UserForm } from "./views/UserForm";
import { User } from "./models/data/User";

const appRoot = document.getElementById("app");

if(appRoot){
  const user = new UserForm(
    appRoot,
    User.createWithDefaultConfig({
      name: "Zubair",
      age: 21
    })
  );
  user.render();
}
// setTimeout(()=>{
//   user.render();
// },3000) 