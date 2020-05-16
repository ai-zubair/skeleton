import { EventMap } from "../types/interfaces";
import { User } from "../models/data/User";
class UserForm{
  constructor(public parent: Element, public model: User){
    this.bindModel();
  }

  bindModel = (): void => {
    this.model.on("change",this.render);
  }

  onButtonClick = (): void => {
    console.log(this)
    console.log("Hey the butotn was clicked!");
  }

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge();
  }

  eventMap: EventMap = {
    "click:button#submit": this.onButtonClick,
    "click:button#random-age": this.onSetRandomAgeClick
  }

  template = (): string => {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name:${this.model.get("name")}</div>
        <div>User Age:${this.model.get("age")}</div>
        <input>
        <button id="submit">Click Me</button>
        <button id="random-age">Set Random Age</button>
      </div>
    `;
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

export { UserForm }