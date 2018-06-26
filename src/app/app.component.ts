import {Component} from "@angular/core";

@Component({
  selector:'my-app',
  templateUrl: 'app/1.html',
  styleUrls:['app/css/myshop.css']
  
})
 export class AppComponent
 {
public m:any[]=[];
  public movielist=['Batmanvssuperman','civilwar','deadpool','Prestige','Ant man','jurrassic world','Snow white and the hunts man','The Wolvarine','Shutter Island','The Dictator','The man who new infinity','Why him'];
  selectedmovie(movie:any){
    
       alert(movie + '  was added to cart');
       this.m.push(movie);
    
  }
}



  