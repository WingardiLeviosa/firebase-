import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
  {path : "home" , component : HomeComponent},
  {path : "" , component : HomeComponent},
  {path : "**" , component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
