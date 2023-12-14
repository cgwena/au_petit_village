import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SortByPricePipe } from './sort-by-price.pipe';
import { FilterByNamePipe } from './filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ProductCardComponent,
    SortByPricePipe,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
