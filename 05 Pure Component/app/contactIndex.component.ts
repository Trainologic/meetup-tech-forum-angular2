import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Contact} from "./app.store";

@Component({
    selector: "contact-index",
    template: require("./contactIndex.component.html")
})
export class ContactIndexComponent {
    @Input() contacts: Contact[];
    @Input() hideDelete: boolean;

    @Output() onDelete: EventEmitter<Contact>;

    constructor() {
        this.onDelete = new EventEmitter();
    }

    remove(contact, index) {
        this.onDelete.emit(contact);
    }
}
