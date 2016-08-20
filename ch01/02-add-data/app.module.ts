import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldDataComponent }  from './helloWorldData.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ HelloWorldDataComponent ],
    bootstrap:    [ HelloWorldDataComponent ]
})
export class AppModule { }
