import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyspaceComponent } from './myspace/myspace.component';
import { EventsComponent } from './events/events.component';
import { LiveComponent } from './live/live.component';
import { RegisterComponent } from './register/register.component';
import { VideosComponent } from './videos/videos.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'myspace',loadComponent:()=>import('./myspace/myspace.component').then(m=>m.MyspaceComponent) },
    {path:'home',loadComponent:()=>import('./home/home.component').then(m=>m.HomeComponent)},
    {path:'events',loadComponent:()=>import('./events/events.component').then(m=>m.EventsComponent)},
    {path:'videos',loadComponent:()=>import('./videos/videos.component').then(m=>m.VideosComponent)},
    {path:'live',loadComponent:()=>import('./live/live.component').then(m=>m.LiveComponent)},
    {path:'register',loadComponent:()=>import('./register/register.component').then(m=>m.RegisterComponent)},
    {path:'**',redirectTo:'/home',pathMatch:'full'},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
