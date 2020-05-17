import { Skeleton } from "./Skeleton";
import { User, UserProps } from "../models/data/User";

class UserView extends Skeleton<User, UserProps>{
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