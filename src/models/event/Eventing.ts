import { EventHandler } from "../../types/interfaces";
interface Events { 
  [eventName: string]: EventHandler[];
}

class Eventing {
  events: Events = {};

  on = (eventName: string, eventHandler: EventHandler): void => {
    const eventHandlers = this.events[eventName] || [];
    eventHandlers.push(eventHandler);
    this.events[eventName] = eventHandlers;
  }

  trigger = (eventName: string): void =>{
    const eventhandlers = this.events[eventName];
    if( eventhandlers && eventhandlers.length > 0 ){
      eventhandlers.forEach( eventHandler => eventHandler() );
    }
  }
}

export { Eventing }