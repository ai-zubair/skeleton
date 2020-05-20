import { Eventing } from "../mockup/event/Eventing";
import axios, { AxiosResponse } from 'axios';

interface Deserializer<T,K>{
  (record: K): T
}

class Collection<T, K>{

  models: T[] = [];
  private events: Eventing = new Eventing();

  constructor(
    public collectionAPIurl: string,
    public deserialize: Deserializer<T,K>
  ){}

  on = this.events.on;

  trigger = this.events.trigger;
  
  fetch = (): void => {
    axios.get(this.collectionAPIurl).then((response: AxiosResponse): void=>{
      this.models = response.data.map((record: K): T =>{
        return this.deserialize(record);
      })
      this.trigger("change");
    })
  }

}

export { Collection }