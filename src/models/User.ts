import axios, {AxiosResponse} from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

interface Events { 
  [eventName: string]: EventHandler[];
}
interface EventHandler {
  (): void;
}

class User{
  events: Events = {};

  constructor(private data: UserProps){}

  get(propName: string): (string | number){
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data,update);
  }

  on(eventName: string, eventHandler: EventHandler): void {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(eventHandler);
    this.events[eventName] = eventHandlers;
  }

  trigger(eventName: string): void{
    const eventhandlers = this.events[eventName];
    if( eventhandlers && eventhandlers.length > 0 ){
      eventhandlers.forEach( eventHandler => eventHandler() );
    }
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