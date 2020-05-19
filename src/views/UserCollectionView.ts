import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/data/User";
import { UserView } from "./UserView";

class UserCollectionView extends CollectionView<User, UserProps>{
  renderCollectionItem = (itemParent: Element, itemModel: User): void => {
    const userView = new UserView(itemParent,itemModel);
    userView.render()
  }
}

export { UserCollectionView };