import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductsComponent } from './components/products/products.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [

  {path:'admin',component:AdminpageComponent},
  {path:'',component:LandingPageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'signin',component:SigninComponent},
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:ProductlistComponent
      },
      {
        path:'product/:cat',
        component:ProductsComponent
      }
    ]
  
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
