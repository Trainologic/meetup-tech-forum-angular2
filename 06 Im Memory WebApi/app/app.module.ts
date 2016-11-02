import "reflect-metadata";
import "zone.js";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";
import {ContactIndexComponent} from "./contactIndex.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {ContactDb} from "./contact.db";

@NgModule({
    declarations: [AppComponent, ContactIndexComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, HttpModule,  InMemoryWebApiModule.forRoot(ContactDb)],
    providers: [ContactService]
})
export class AppModule {
}
