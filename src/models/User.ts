import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User{
  static readonly userAPIurl: string = "http://localhost:3000/users";

  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(User.userAPIurl);
  attributes: Attributes<UserProps>;

  constructor(data: UserProps){
    this.attributes = new Attributes<UserProps>(data);
  }

  get on(){
    return this.events.on;
  }

  get trigger(){
    return this.events.trigger;
  }

  get get(){
    return this.attributes.get;
  }

}

export { User }