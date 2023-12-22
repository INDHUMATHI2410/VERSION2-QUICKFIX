import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductServiceService {

    constructor(private client:HttpClient) { }

    getRefrigeration(){
        return this.client.get("http://localhost:3000/refrigeration");
    }
    getKitchen(){
        return this.client.get("http://localhost:3000/kitchen");
    }
    getCooking(){
      return this.client.get("http://localhost:3000/cooking");
    }
    getWashing(){
      return this.client.get("http://localhost:3000/washing");
    }
    getHeating(){
      return this.client.get("http://localhost:3000/heating");
    }
  
}
