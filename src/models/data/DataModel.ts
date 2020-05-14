import { EventHandler, Syncable } from "../../types/interfaces";
import { AxiosPromise, AxiosResponse } from "axios";

interface Attributes<T>{
  get<K extends keyof T>(key: K): T[K];
  getAll(): T; 
  set(update: T): void;
}

interface Events{
  on(eventName: string, eventHandler: EventHandler): void; 
  trigger(eventName: string): void; 
}

interface Sync<T>{
  fetch(id: number): AxiosPromise; 
  save(data: T): AxiosPromise; 
}

class DataModel<T extends Syncable>{

  constructor(
    private attributes: Attributes<T>,
    private events: Events,
    private sync: Sync<T>
  ){}


  on =  this.events.on;

  trigger =  this.events.trigger;
  
  get =  this.attributes.get;

  set = (update: T) => {
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

export { DataModel }