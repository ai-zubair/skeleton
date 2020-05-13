import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User{
  static readonly usersAPIurl: string = "http://localhost:3000/users";

  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(User.usersAPIurl);
  private attributes: Attributes<UserProps>;

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

  set = (update: UserProps) => {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch = (): void => {
    const userID = this.get("id");

    if(userID){
      this.sync.fetch(userID).then((response: AxiosResponse): void=>{
        this.set(response.data);
      })
    }
  }

  save = (): void => {
    const userData = this.attributes.getAll();

    this.sync.save(userData).then((response: AxiosResponse): void=>{
      this.attributes.set(response.data);
      this.trigger("save");
    })
  }
}

export { User }