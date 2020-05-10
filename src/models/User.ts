import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User{
  static readonly userAPIurl: string = "http://localhost:3000/users";

  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(User.userAPIurl);

  constructor(private data: UserProps){}

  get(propName: string): (string | number){
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data,update);
  }
}

export { User }