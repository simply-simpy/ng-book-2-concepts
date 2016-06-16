import {Component} from '@angular/core';

/**TODO: Come up with own examples of this type of app
 *  1. Show three dogs from pet finder site
 *  2. Have: name, age, breed, phone # to adopt, image
 *  3. Show breadcrumbs for type, breed, age
 *  4. Make components for image, breadcrumbs,
 */

class Pet {
    constructor (
        public imageUrl: string,
        public name: string,
        public color: string,
        public breed: string,
        public description: string
    )
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
    template: `<span class="name">{{ pet.name }}</span>`
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
    template: `<span class="color">{{ pet.color }}</span>`
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
    template: `<span class="breed">{{ pet.breed }}</span>`
})
class PetBreed {
    pet: Pet
}


/**
 * @Description component
 */

@Component({
    selector: 'description',
    inputs: ['pet'],
    template: `
        <p class="description"> {{ pet.description }}</p>
    `
})

class PetDescription {}

/**
 * @PetRow — shows details of pet
 */

@Component({
    selector: 'pet-row',
    inputs: ['inventory-app'],
    directives: [PetImage],
    template: `
        <pet-image [pet]="pet"></pet-image>
      
    `
})
class PetRow {}

/**
 * Main app component
 */

@Component({
    selector: 'inventory-app',
    directives: [PetRow],
    template: `
        <pet-row *ngFor = "let pet of pets"> </pet-row>
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
















