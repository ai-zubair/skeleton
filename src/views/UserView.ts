import { Skeleton } from "./Skeleton";
import { User, UserProps } from "../models/data/User";
import { EventMap } from "../types/interfaces";

class UserView extends Skeleton<User, UserProps>{
  eventMap: EventMap = {};

  template = (): string => {
    return`
      <div>
        <div id="user-details"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}

export { UserView }