import {bootstrap} from 'angular2/platform/browser';
import { HTTP_BINDINGS, HTTP_PROVIDERS } from 'angular2/http';
import { AppComponent } from './app-component';
import { DataService } from '/app/data/data-service';
import 'rxjs/Rx';

bootstrap(AppComponent, [HTTP_BINDINGS, HTTP_PROVIDERS, DataService])
    .then(success => console.log('Bootstrap success'))
    .catch(error => console.log(error));