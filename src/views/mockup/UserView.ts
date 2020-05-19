import { Skeleton } from "../Skeleton";
import { User, UserProps } from "../../models/data/mockup/User";
import { UserDetails } from "./UserDetails";
import { UserForm } from "./UserForm";

class UserView extends Skeleton<User, UserProps>{

  regionMap:{ [key: string]: string } = {
    userDetails: "div#user-details",
    userForm: "div#user-form"
  }

  onRender = ():void=> {
    new UserDetails(this.regions.userDetails, this.model).render()
    new UserForm(this.regions.userForm, this.model).render()
  }

  template = (): string => {
    return`
      <div>
        <div id="user-details"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}

export { UserView }