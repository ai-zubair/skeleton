import axios, {AxiosResponse} from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

class User{

  events: Eventing = new Eventing();

  constructor(private data: UserProps){}

  get(propName: string): (string | number){
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data,update);
  }



  fetch(): void{
    const userID = this.get('id');
    if(userID){
      axios
        .get(`http://localhost:3000/users/${userID}`)
        .then((response: AxiosResponse): void=>{
          this.set(response.data);
      })
    }
  }

  save(): void {
    const userID = this.get('id');
    if (userID) {
      axios.put(`http://localhost:3000/users/${userID}`,this.data);
    } else {
      axios.post('http://localhost:3000/users',this.data);
    }
  }
}

export { User }