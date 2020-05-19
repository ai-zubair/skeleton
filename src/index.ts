import { UserCollectionView } from "./views/UserCollectionView";
import { User } from "./models/data/User";

const appRoot = document.getElementById("app");

if(appRoot){
  const modCollec = User.createUserCollection();
  modCollec.on("change",()=>{
    const userCollec = new UserCollectionView(appRoot,modCollec);
    userCollec.render();
  })
  modCollec.fetch();
}