import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonUtilService } from './common-util-service';


const routes: Routes = [
  {
    path:'home',
    loadChildren:'./home/home.module#HomeModule'
    }
   
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CommonUtilService]
})
export class AppRoutingModule { }
