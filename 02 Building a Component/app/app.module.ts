import "reflect-metadata";
import "zone.js";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule]
})
export class AppModule {
}
