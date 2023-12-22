import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { HomePageComponent } from './homePage/homePage.component';
import { ProductPageComponent } from './productPage/productPage.component';
import { AuthGuard } from './auth.guard';
import { DeactivateGuard } from './deactivate.guard';
import { RegisterComponent } from './Register/Register.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationFormComponent } from './RegistrationForm/RegistrationForm.component';
import { AddDeleteComponent } from './addDelete/addDelete.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'loginPage', component: LoginPageComponent},
  {path:'suggestion', component:SuggestionComponent},
  {path: 'productPage', component:ProductPageComponent,
  canActivate:[AuthGuard],

  //  canActivateChild[AuthGuard],

},
{
  path:'RegistrationForm',
component:RegistrationFormComponent
},
{
  path:'admin',
  component:AdminComponent
},
{
  path:'form',
  component:FormComponent
},
{
  path:'register',
  component:RegisterComponent,
  canDeactivate:[DeactivateGuard]
},
{
  path:'Registration',
  component:RegistrationComponent
},
{
  path:'addDelete',
  component:AddDeleteComponent
},
{ 
  path:'header',
  component:HeaderComponent
},
{path: '**', component: HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
