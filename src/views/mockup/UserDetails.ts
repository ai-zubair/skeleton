import { Skeleton } from "../Skeleton";
import { User, UserProps } from "../../models/data/mockup/User";

class UserDetails extends Skeleton<User, UserProps>{
  template = (): string => {
    return`
      <div>
        <h1>User Details</h1>
        <div>Name: ${this.model.get("name")}</div>
        <div>Age: ${this.model.get("age")}</div>
      </div>
    `;
  }
}

export { UserDetails }