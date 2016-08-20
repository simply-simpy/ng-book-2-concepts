import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HelloWorldDataListComponent }  from './helloWorldDataList.component';
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ HelloWorldDataListComponent ],
    bootstrap:    [ HelloWorldDataListComponent ]
})
export class AppModule { }
