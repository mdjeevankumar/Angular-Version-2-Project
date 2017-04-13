import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './components/client.component';
import {AboutComponent } from './components/about.component';


const appRoutes : Routes = [
{
path:'',
component:ClientComponent

},  

{
path:'about',
component:AboutComponent
}];



export const routing : ModuleWithProviders= RouterModule.forRoot(appRoutes);