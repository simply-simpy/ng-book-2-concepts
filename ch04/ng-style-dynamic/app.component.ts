import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <div class="input">
            <label>Color<br>
                <input type="text" name="color" value="{{ color }}" #colorInput>
            </label>
        </div>
        <div class="input">
            <label>Font Size<br>
                <input type="text" name="fontSize" value="{{ fontSize }}" #fontInput>
            </label>
        </div>
        <div class="results">
            <p [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
                red text
            </p>
            <p [ngStyle]="{color: colorInput.value}">
                {{ colorInput.value }} text
            </p>
            <p style.background-color="colorInput.value" style="color: white;">
                {{ colorInput.value }} background
            </p>
        </div>
        <button (click)="applySettings(colorInput.value, fontInput.value)">Apply Settings</button>
    `
})

export class AppComponent{
    color: string;
    fontSize: number;

    applySettings(color, fontSize){
        this.color = color;
        this.fontSize = fontSize;
    }
}