import { EventMap } from "../types/interfaces";
import { User, UserProps } from "../models/data/User";
import { Skeleton } from "./Skeleton";
class UserForm extends Skeleton<User, UserProps>{

  onUpdateNameClick = (): void => {
    const userInput = this.parent.querySelector("input");
    if(userInput){
      const userName = userInput.value;
      this.model.set({ name: userName });
    }
  }

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSaveUserClick = (): void => {
    this.model.save();
  }

  eventMap: EventMap = {
    "click:button#update-name": this.onUpdateNameClick,
    "click:button#random-age": this.onSetRandomAgeClick,
    "click:button#save-user": this.onSaveUserClick
  }

  template = (): string => {
    return `
      <div>
        <input id="user-name-input" type="text" placeholder=${this.model.get("name")}>
        <button id="update-name">Update Name</button>
        <button id="random-age">Set Random Age</button>
        <button id="save-user">Save</button>
      </div>
    `;
  }

}

export { UserForm }