import {Component} from "@angular/core";
import {Contact, ContactService} from "./contact.service";

@Component({
    selector: "my-app",
    template: require("./app.component.html")
})
export class AppComponent {
    contacts: Contact[];
    name: string;

    constructor(private contactService: ContactService) {
        this.contacts = null;
    }

    ngOnInit() {
        this.contactService.loadAll().then(contacts => {
            this.contacts = contacts;
        });
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
