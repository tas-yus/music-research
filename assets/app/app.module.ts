import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}
