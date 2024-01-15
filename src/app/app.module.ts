import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { NewsUpdatesComponent } from './news-updates/news-updates.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBannerComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    NewsUpdatesComponent,
    DetailsFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
