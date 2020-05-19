import { Collection } from "../models/data/Collection";

abstract class CollectionView<T, K>{
  constructor(
    public parent: Element,
    public collection: Collection<T, K>
  ){}
  
  abstract renderCollectionItem(itemParent: Element, itemModel: T): void;

  render = (): void => {
    const collection  = document.createElement("template")
    for (const itemModel of this.collection.models) {
      const itemParent = document.createElement("div");
      this.renderCollectionItem(itemParent, itemModel )
      collection.content.append(itemParent)
    }
    this.parent.append(collection.content);
  }
}

export { CollectionView }