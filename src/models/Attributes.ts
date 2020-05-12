class Attributes<T>{
  
  constructor(private data: T){}
  
  get = <K extends keyof T>(key: K): T[K] => {
    console.log("This is",this)
    return this.data[key];
  }

  set = (update: T): void => {
    Object.assign(this.data,update);
  }
}

export  { Attributes }