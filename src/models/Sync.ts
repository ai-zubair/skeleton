import axios, { AxiosPromise } from "axios";

interface Syncable{
  id?: number;
}

class Sync<T extends Syncable>{

  constructor(public collectionAPIurl: string){}

  fetch(id: number): AxiosPromise{
    return axios.get(`${this.collectionAPIurl}/${id}`)
  }

  save(data: T): AxiosPromise{
    const recordID = data.id;

    if (recordID) {
      return axios.put(`${this.collectionAPIurl}/${recordID}`,data);
    } else {
      return axios.post(`${this.collectionAPIurl}`,data);
    }
  }
  
}

export { Sync }