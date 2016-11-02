import "reflect-metadata";
import "zone.js";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {ContactService} from "./contact.service";
import {ContactIndexComponent} from "./contactIndex.component";

@NgModule({
    declarations: [AppComponent, ContactIndexComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule],
    providers: [ContactService]
})
export class AppModule {
}
