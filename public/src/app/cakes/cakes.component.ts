import { Component, OnInit } from '@angular/core';
import { CakesService } from '../cakes.service';


@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {
  allCakes: any = [];
  Cakes: any={};
  singleCakes: any = [];
  
  avgRates:number=0;
  
  newCakes:any={
    baker:"",
    image:"",

  };
  
    constructor( private _httpService: CakesService) { }
    ngOnInit(): void {
      console.log("init");
      let observable = this._httpService.getCakes();
  
  
      observable.subscribe(
         (data:any) =>{
           console.log("esto es data: "+data)
        this.allCakes = data
  
      },
      (error:any) =>{
        console.log("Something wet wrong ",error);
      })
      // console.log("After loading the Cakes: ", this.Cakeslist);
    }
  
  
    getACake(_id:object):void{
      console.log("empieza func: "+_id);
      this.Cakes=_id
  
      this._httpService.getACake(this.Cakes)
      .subscribe((data: any) =>{
        console.log("este es getACakes que regresa: ",data)
        this.singleCakes=data
        // console.log("data que regresa desde el service: ",data.baker)
        console.log("data que regresa desde el singleCakes: ",this.singleCakes.rate)
        console.log("length de rate ",this.singleCakes.rate.length)
        this.average(this.singleCakes);
      }); 
    };
    average(singleCakes:any) {
      parseInt(singleCakes.rate)
      let avgRates=0
      console.log("vamos al loop?")
        for(let i=0; i<singleCakes.rate.length; i++){
          
          avgRates=avgRates+singleCakes.rate[i]
          console.log(avgRates)
        }
        this.avgRates=avgRates/singleCakes.rate.length
        console.log("avgRates: ",this.avgRates)
  
    }
  
  
    createCake(event:any) :void{
      console.log("se crea el Cakes")
      event.preventDefault()
      let observable=this._httpService.postCreateCake(this.newCakes)
      console.log("aqui va new Cakes: "+this.newCakes)
      observable.subscribe(data =>{
        this.allCakes.push(data);
      })
  
    }
  
    deleteCakes(_id:object):void{
      this.Cakes = _id;
      console.log("Cakes que se eliminara ", this.Cakes);
      this._httpService.deleteCake(this.Cakes)
      .subscribe((data:any) =>{ 
        console.log(data);
      });
      location.reload();
    }
  
    updateCakes(_id:object, event:any): void{
      console.log("comienza update")
      this.Cakes= _id
      let comment= event.target.comment.value;
      let rate = event.target.rate.value;

      let updatedCakes:any={
        comment,
        rate


      };
      console.log("este es updatedCakes: ",updatedCakes)
      this._httpService.putUpdateCake(this.Cakes, updatedCakes)
      .subscribe((data:any) =>{
        
        console.log(data);
      });
    }
  
  
  }