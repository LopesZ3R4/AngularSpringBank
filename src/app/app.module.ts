import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MainBannerComponent } from './home-page/main-banner/main-banner.component';
import { ServicesSectionComponent } from './home-page/services-section/services-section.component';
import { AboutSectionComponent } from './home-page/about-section/about-section.component';
import { NewsUpdatesComponent } from './home-page/news-updates/news-updates.component';
import { RegisterFormComponent } from './home-page/register-form/register-form.component';
import { HomeComponent } from './home-page/home/home.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    NewsUpdatesComponent,
    RegisterFormComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
