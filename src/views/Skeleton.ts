import { EventMap, RegionMap, Regions } from "../types/interfaces";
import { DataModel } from "../models/data/DataModel";

abstract class Skeleton<T extends DataModel<K>, K>{
  constructor(public parent: Element, public model: T){
    this.bindModel();
  }

  eventMap: EventMap = {};

  regionMap: RegionMap = {};

  regions: Regions = {};

  onRender: ()=>void = () => {};

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

  bindRegions = (domSubTree: DocumentFragment): void => {
    const regionMap = this.regionMap;
    for (const region in regionMap) {
      const element = domSubTree.querySelector(regionMap[region]);
      if(element){
        this.regions[region] = element;
      }
    }
  }

  render = (): void => {
    this.parent.innerHTML = "";
    const userForm = document.createElement("template");
    userForm.innerHTML = this.template();
    this.bindEvents(userForm.content);
    this.bindRegions(userForm.content);
    this.onRender();
    this.parent.append(userForm.content);
  }
}

export { Skeleton };