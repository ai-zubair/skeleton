export interface EventHandler {
  (): void;
}

export interface EventMap{
  [key: string] : EventHandler;
}

export interface Syncable{
  id?: number;
}

export interface RegionMap{
  [key: string]: string;
}

export interface Regions{
  [key: string]: Element;
}