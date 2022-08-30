import {Component, Input} from "@angular/core";
import { Character } from "src/app/model/Character";

@Component({
    selector: 'app-card',
    templateUrl: './Card.component.html',
})
export class CardComponent {

    @Input() personaje!: Character;

    constructor(){}
}