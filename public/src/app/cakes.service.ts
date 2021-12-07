import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakesService {

  constructor(private _http: HttpClient) {

  } 


    getCakes(){
      console.log("hola")
      return this._http.get('http://localhost:8080/cakes');
   };
   getACake(_id:any){
    console.log("soy getACakes: "+_id)
   return this._http.get(`http://localhost:8080/cakes/${_id}`, _id);
   
  }
 
 postCreateCake(newCakes:any){
  return this._http.post('http://localhost:8080/cakes', newCakes);
};
putUpdateCake(_id: object, updatedCakes:any){
  return this._http.put(`http://localhost:8080/cakes/${_id}`, updatedCakes);
};
deleteCake(_id: object){
  return this._http.delete(`http://localhost:8080/cakes/${_id}`, _id);
};
  
}