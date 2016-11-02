import {Component} from "@angular/core";
import {ContactService} from "./contact.service";
import {Contact, appStore} from "./app.store";

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
        appStore.subscribe(()=> {
            this.contacts = appStore.getState().contacts;
        });

        this.contactService.loadAll();
    }

    add() {
        const contact = {
            id: -1,
            name: this.name
        };

        this.contactService.add(contact);
    }

    remove(contact) {
        if(confirm("Delete contact " + contact.name + " ?")) {
            this.contactService.delete(contact.id);
        }
    }

    reload() {
        this.contactService.reload();
    }
}
