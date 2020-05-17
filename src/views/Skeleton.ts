import { EventMap } from "../types/interfaces";
import { DataModel } from "../models/data/DataModel";

abstract class Skeleton<T extends DataModel<K>, K>{
  constructor(public parent: Element, public model: T){
    this.bindModel();
  }

  eventMap: EventMap = {};
  abstract template: () => string;

  bindModel = (): void => {
    this.model.on("change",this.render); 
  }

  bindEvents = (domSubTree: DocumentFragment): void => {
    const eventMap = this.eventMap;
    for (const eventKey in eventMap) {
      const [ event, selector ] = eventKey.split(":");
      const elements = domSubTree.querySelectorAll(selector);
      elements.forEach((element: Element):void=>{
        element.addEventListener(event,eventMap[eventKey]);
      })
    }
  } 

  render = (): void => {
    this.parent.innerHTML = "";
    const userForm = document.createElement("template");
    userForm.innerHTML = this.template();
    this.bindEvents(userForm.content);
    this.parent.append(userForm.content);
  }
}

export { Skeleton };