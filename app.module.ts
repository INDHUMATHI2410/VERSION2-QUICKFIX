import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomePageComponent } from './homePage/homePage.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductPageComponent } from './productPage/productPage.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegistrationComponent } from './Registration/Registration.component';
import { RegistrationFormComponent } from './RegistrationForm/RegistrationForm.component';
import { LoginPageComponent } from './loginPage/loginPage.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { AdminComponent } from './admin/admin.component';
import { FormComponent } from './form/form.component';
import { AddDeleteComponent } from './addDelete/addDelete.component';
import { AddComponent } from './add/add.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [																				
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ProductPageComponent,
    RegistrationComponent,
    RegistrationFormComponent,
    SuggestionComponent,
      AdminComponent,
      FormComponent,
      AddDeleteComponent,
      AddComponent,
      HeaderComponent
   ],
   imports:[
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
 }
