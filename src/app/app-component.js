import {Component, View, OnInit, Input} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DataService } from '/app/data/data-service';

@Component({
  selector: 'main',
  providers:[HTTP_PROVIDERS],
  templateUrl: '/app/app-component.html'
})

export class AppComponent {

    static get parameters(){
        return [[DataService]];
    }
    
    constructor(dataService){
        this._dataService = dataService;
    }
        
    ngOnInit(){
        console.log('APP Init');
        this.getOptions();
    }

    getOptions(){
        console.log('Init Options');
        
        this._dataService.getOptions
            .subscribe(
                opt => this.opt = opt
         )
    }
     
     onChange(selection){
         if(selection === 1){
             
         }
         else{
            this._dataService.getCategories
                .subscribe(
                    cat => this.cat = cat
             )
         } 
     }

}  