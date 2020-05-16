import { DataModel } from "./DataModel";
import { Attributes } from "../prop/Attributes";
import { Eventing } from "../event/Eventing";
import { APISync } from "../sync/APISync";
import { Collection } from "./Collection";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User extends DataModel<UserProps>{
  static readonly usersAPIurl: string = "http://localhost:3000/users";

  static createWithDefaultConfig( userData: UserProps ): User{
    return new User(
      new Attributes<UserProps>(userData),
      new Eventing(),
      new APISync<UserProps>(User.usersAPIurl)
    );
  }

  static createUserCollection(): Collection<User,UserProps> {
    return new Collection<User, UserProps>(
      User.usersAPIurl,
      User.createWithDefaultConfig
    )
  }

  setRandomAge = ():void => {
    const age = Math.floor(Math.random()*100) + 1;
    this.set({
      age
    })
  }
}

export { User }