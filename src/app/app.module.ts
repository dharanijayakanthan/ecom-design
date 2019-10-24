import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServerBaseService} from './service/server-base';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductDisplayViewComponent } from './components/product-display-view/product-display-view.component';
import { ProductDisplayCustomizeComponent } from './components/product-display-customize/product-display-customize.component';
import { CarouselModule } from 'ngx-owl-carousel-o';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProductDisplayComponent,
    LayoutComponent,
    ProductDisplayViewComponent,
    ProductDisplayCustomizeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [
ServerBaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
