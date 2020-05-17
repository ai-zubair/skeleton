import { EventMap } from "../types/interfaces";
import { User, UserProps } from "../models/data/User";
import { Skeleton } from "./Skeleton";
class UserForm extends Skeleton<User, UserProps>{

  onUpdateNameClick = (): void => {
    const userInput = this.parent.querySelector("input");
    if(userInput){
      const userName = userInput.value;
      this.model.set({
        name: userName
      })
    }
  }

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge();
  }

  eventMap: EventMap = {
    "click:button#update-name": this.onUpdateNameClick,
    "click:button#random-age": this.onSetRandomAgeClick
  }

  template = (): string => {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name:${this.model.get("name")}</div>
        <div>User Age:${this.model.get("age")}</div>
        <input id="user-name-input" type="text">
        <button id="update-name">Update Name</button>
        <button id="random-age">Set Random Age</button>
      </div>
    `;
  }

}

export { UserForm }