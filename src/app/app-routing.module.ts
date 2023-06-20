import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './pages/addproduct/addproduct.component';
import { EditproductComponent } from './pages/editproduct/editproduct.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full',
  },
  {
    path:'productlist',
    component:ProductlistComponent,
    pathMatch:'full'
   
  },
  {
    path:'addproduct',
    component:AddproductComponent,
    pathMatch:'full'
   
  },
  {
    path:'editproduct',
    component:EditproductComponent,
    pathMatch:'full'
   
  },
  {
    path:'editproduct/:id',
    component:EditproductComponent,
    pathMatch:'full'
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
