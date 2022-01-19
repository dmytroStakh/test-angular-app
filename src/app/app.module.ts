import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ConertToSpacesPipe } from './convert-to-spaces.pipe';
import { StarsRatingComponent } from './shared/stars-rating/stars-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConertToSpacesPipe,
    StarsRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
