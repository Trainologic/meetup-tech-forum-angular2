export class ContactService {
    private contacts: Contact[];

    constructor() {
    }

    loadAll(): Promise<Contact[]> {
        if(this.contacts) {
            return Promise.resolve(this.contacts);
        }

        return this.fetchAll().then(contacts => {
            return this.contacts = contacts;
        });
    }

    private fetchAll() {
        return Promise.resolve([
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ]);
    }
}

export interface Contact {
    id: number;
    name: string;
}
