import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { SliderComponent } from './components/slider/slider.component';
import { PersonFormComponent } from './components/personform/personform.component';
import { FormCompanyComponent } from './components/form-company/form-company.component';
import { ContactComponent } from './components/contact/contact.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    SecondComponent,
    ThirdComponent,
    SliderComponent, 
    PersonFormComponent,
    FormCompanyComponent,
    ContactComponent,
    ObjectsComponent,
    ContactComponent,
    AboutComponent,
    PersonFormComponent,
    FormCompanyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
