import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BindActionComponent }  from './bindAction.component';
import {ParagraphComponent} from "./paragraph.component";
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ BindActionComponent, ParagraphComponent ],
    bootstrap:    [ BindActionComponent ]
})
export class AppModule { }

