import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core"

@Component({
    selector:'app-header',
    templateUrl: './header.component.html',
    styles: ['']
})
export class HeaderComponent implements OnInit {

    @Input() title: String
    @Output() propagar = new EventEmitter<String>();

    ngOnInit(): void {
        console.log("Se inciia el componente")
    }

    onPrapagar = () => {
        this.propagar.emit("Juan Daniel Arboleda");
    }

    constructor() {
        this.title = "Prueba";
        console.log("Constructor")
    }
}