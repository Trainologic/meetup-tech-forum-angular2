import {Contact, appStore} from "./app.store";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class ContactService {
    constructor(private http: Http) {
    }

    private get state() {
        return appStore.getState();
    }

    loadAll() {
        if(this.state.contacts) {
            Promise.resolve(this.state.contacts);
        }

        this.reload();
    }

    reload() {
        return this.fetchAll().then(contacts => {
            appStore.dispatch({
                type: "RESET_CONTACTS",
                contacts: contacts,
            });

            return contacts;
        });
    }

    delete(contactId: number) {
        return this.http.delete("api/contacts/" + contactId).toPromise().then(function() {
            appStore.dispatch({
                type: "DELETE_CONTACT",
                contactId: contactId,
            });
        });
    }

    add(contact: Contact) {
        appStore.dispatch({
            type: "ADD_CONTACT",
            contact: contact,
        });
    }

    private fetchAll(): Promise<Contact[]> {
        return this.http.get("api/contacts").map(res => res.json().data).toPromise();
    }
}
