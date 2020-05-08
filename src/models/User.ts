interface UserProps {
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
}

export { User }