import {Component, View, OnInit, Input} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { DataService } from '/app/data/data-service';
import { TopicsComponent } from '/app/app-topics';
import { FeaturesComponent } from '/app/app-features';


@Component({
  selector: 'main',
  providers:[HTTP_PROVIDERS],
  templateUrl: '/app/app-component.html',
  directives:[TopicsComponent, FeaturesComponent]
})

export class AppComponent {

    static get parameters(){
        return [[DataService]];
    }
    
    constructor(dataService){
        
        // Services
        this._dataService = dataService;
        
        // Properties
        this.selectedOption = {
            topics : false,
            features : false
        }
    }
        
    ngOnInit(){ 
        console.log('APP Init');
        this.getOptions();
    }

    getOptions(){
        console.log('Init Options');
        
        this._dataService.getOptions
            .subscribe( 
                opt => this.option = opt
         )
        
        this.selectedOptions(1);
    }
     
     onChange(evt, value){
         console.log(value);
         this.selectedOptions(value);
     }
    
    selectedOptions(value){
         if(value == 1){
             this.selectedOption.topics = false;
             this.selectedOption.features = true;
         }
         else{
            this.selectedOption.topics = true;
            this.selectedOption.features = false; 
         } 
    }

}  