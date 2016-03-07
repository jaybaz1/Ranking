import {Component, View, OnInit, Input} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TypeService } from '/app/type/type-service';

@Component({
  selector: 'main',
  providers:[HTTP_PROVIDERS, TypeService],
  templateUrl: '/app/app-component.html'
})

export class AppComponent {
    
     constructor(typeService: TypeService){
         
         typeService.types
            .subscribe(
                type => this.type = type,
                console.error, 
                () => console.log('Completed')
         );
     } 
     
     onChange(test){
         console.log(test.target.selectedIndex + 1);
     }
     
     getCategories(){
         this.typeService.categories
            .subscribe(
                cat => this.cat = cat,
                console.error, 
                () => console.log('Completed')
         );
     }
}  