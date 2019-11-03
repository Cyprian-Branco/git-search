import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
