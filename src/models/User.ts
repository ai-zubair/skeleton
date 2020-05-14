import { DataModel } from "./DataModel";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { APISync } from "./APISync";
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

}

export { User }