import { UserForm } from "./views/UserForm";
import { User } from "./models/data/User";
import { UserView } from "./views/UserView";

const appRoot = document.getElementById("app");

if(appRoot){
  const user = new UserView(
    appRoot,
    User.createWithDefaultConfig({
      name: "Zubair",
      age: 21
    })
  );
  user.render();
  console.log(user)
}
// setTimeout(()=>{
//   user.render();
// },3000) 