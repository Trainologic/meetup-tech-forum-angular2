import {Contact, appStore} from "./app.store";

export class ContactService {
    constructor() {
    }

    private get state() {
        return appStore.getState();
    }

    loadAll(): Promise<Contact[]> {
        if(this.state.contacts) {
            return Promise.resolve(this.state.contacts);
        }

        return this.fetchAll().then(contacts => {
            appStore.dispatch({
                type: "RESET_CONTACTS",
                contacts: contacts,
            });

            return contacts;
        });
    }

    delete(contactId: number) {
        appStore.dispatch({
            type: "DELETE_CONTACT",
            contactId: contactId,
        });
    }

    add(contact: Contact) {
        appStore.dispatch({
            type: "ADD_CONTACT",
            contact: contact,
        });
    }

    private fetchAll() {
        return Promise.resolve([
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ]);
    }
}

