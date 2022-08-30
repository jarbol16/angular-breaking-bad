import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core'

@Component({
    selector: "app-body",
    templateUrl: "./body.component.html",
    styles: ['']
})
export class BodyComponent implements OnInit, OnChanges {
    text!: string;

    constructor() {}

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }
}