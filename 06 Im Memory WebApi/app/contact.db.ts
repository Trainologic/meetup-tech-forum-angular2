import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ContactDb implements InMemoryDbService {
    createDb() {
        let contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];
        return {contacts};
    }
}