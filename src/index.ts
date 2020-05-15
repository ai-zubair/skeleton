import { UserForm } from "./views/UserForm";

const user = new UserForm(document.getElementById("app"));
setTimeout(()=>{
  user.render();
},3000) 