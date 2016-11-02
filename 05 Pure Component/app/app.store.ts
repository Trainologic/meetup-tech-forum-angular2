import {createStore} from "redux";

export interface Contact {
    id: number;
    name: string;
}

export interface AppState {
    contacts: Contact[]
}

const initialState = {
    contacts: null,
};

function reducer(state: AppState, action) {
    if(action.type == "RESET_CONTACTS") {
        return Object.assign({}, state, {contacts: action.contacts});
    }
    else if(action.type == "DELETE_CONTACT") {
        return deleteContact(state, action.contactId);
    }
    else if(action.type == "ADD_CONTACT") {
        return addContact(state, action.contact);
    }

    return state;
}

function deleteContact(state: AppState, contactId: number) {
    const index = state.contacts.findIndex(c => c.id == contactId);
    if(index == -1) {
        return;
    }

    const newContacts = state.contacts.concat([]);
    newContacts.splice(index, 1);

    return Object.assign({}, state, {contacts: newContacts});
}

function addContact(state: AppState, contact: Contact) {
    const newContacts = state.contacts.concat([contact]);
    return Object.assign({}, state, {contacts: newContacts});
}

export const appStore = createStore(reducer, initialState);
