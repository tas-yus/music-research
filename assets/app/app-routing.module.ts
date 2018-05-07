import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { ThreeComponent } from "./three/three.component";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'one/:id', component: OneComponent },
  { path: 'two/:id', component: TwoComponent },
  { path: 'three/:id', component: ThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
