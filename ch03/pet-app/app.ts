/**
 * Example of passing multiple components into one main component. Removes some of the complexity of the
 * inventory app code example.
 */

import {Component} from '@angular/core';

class Pet {
    constructor(
        public imageUrl: string,
        public name: string,
        public color: string,
        public breed: string,
        public description: string
    ) { }
}

/**
 * @PetImage component
 */
@Component({
    selector: 'pet-image',
    inputs: ['pet'],
    template: `
        <img [src]="pet.imageUrl">
    `
})
class PetImage {
    pet: Pet
}

/**
 * @PetName
 */
@Component({
    selector: 'pet-name',
    inputs: ['pet'],
    template: `<p class="name"><strong>{{ pet.name }}</strong></p>`
})
class PetName {
    pet: Pet
}

/**
 * @PetColor
 */
@Component({
    selector: 'pet-color',
    inputs: ['pet'],
    template: `<p class="color">Color: {{ pet.color }}</p>`
})
class PetColor {
    pet: Pet
}

/**
 * @PetBreed
 */
@Component({
    selector: 'pet-breed',
    inputs: ['pet'],
    template: `<p class="breed">Breed: {{ pet.breed }}</p>`
})
class PetBreed {
    pet: Pet
}

/**
 * @Description component
 */

@Component({
    selector: 'pet-description',
    inputs: ['pet'],
    template: `
        <p class="description">Description: {{ pet.description }}</p>
    `
})
class PetDescription {}

/**
 * Main app component
 */

@Component({
    selector: 'app',
    directives: [PetImage, PetName, PetBreed, PetColor, PetDescription],
    styles: [':host { display: flex; align-content: stretch; justify-content: space-between; }'],
    template: `
        <pet-row *ngFor = "let pet of pets">
            <pet-image [pet]="pet"></pet-image>
            <pet-name [pet]="pet"></pet-name>
            <pet-color [pet]="pet"></pet-color>
            <pet-breed [pet]="pet"></pet-breed>
            <pet-description [pet]="pet"></pet-description>
        </pet-row>
    `
})

export class App {
    pets: Pet[];
    constructor(){
        this.pets = [
            new Pet ('img/buster.jpg', 'Buster', 'merle', 'aussie', 'Quite the active fellow'),
            new Pet ('img/maggie.jpg', 'Maggie', 'black', 'mix', 'Quite the mellow girl'),
            new Pet ('img/maverick.jpg', 'Maverick', 'red tri', 'aussie', 'Quite the agile one')
        ]
    }

}
















