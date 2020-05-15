import { EventMap } from "../types/interfaces";
class UserForm{
  constructor(public parent: Element){}

  onButtonClick = (): void => {
    console.log("Hey the butotn was clicked!");
  }

  eventMap: EventMap = {
    "click:button#submit" : this.onButtonClick
  }

  template = (): string => {
    return `
      <div>
        <h1>User Form</h1>
        <input>
        <button id="submit">Click Me</button>
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
    const userForm = document.createElement("template");
    userForm.innerHTML = this.template();
    this.bindEvents(userForm.content);
    this.parent.append(userForm.content);
  }
}

export { UserForm }