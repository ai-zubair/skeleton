export interface EventHandler {
  (): void;
}

export interface EventMap{
  [key: string] : EventHandler;
}

export interface Syncable{
  id?: number;
}