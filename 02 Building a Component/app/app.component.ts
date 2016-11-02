import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: require("./app.component.html")
})
export class AppComponent {
    contacts: Contact[];
    name: string;

    constructor() {
        this.contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
    }

    add() {
        const contact = {
            id: -1,
            name: this.name
        };

        this.contacts.push(contact);
    }

    remove(contact, index) {
        if(confirm("Delete contact " + contact.name + " ?")) {
            this.contacts.splice(index, 1);
        }
    }
}

interface Contact {
    id: number;
    name: string;
}
