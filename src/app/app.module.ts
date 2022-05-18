import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinkAppComponent } from './components/drink-app/drink-app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrinkContentComponent } from './components/drink-app/drink-content/drink-content.component';
import { DrinksResultsComponent } from './components/drink-app/drink-content/drinks-results/drinks-results.component';
import { DrinkHeaderComponent } from './components/drink-app/drink-header/drink-header.component';
import { DrinkFilterComponent } from './components/drink-app/drink-header/drink-filter/drink-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { DrinkFullDetailsComponent } from './components/drink-app/drink-content/drink-full-details/drink-full-details.component';
import { DrinkImageComponent } from './components/drink-app/drink-content/drink-full-details/drink-image/drink-image.component';
import { DrinkSearchComponent } from './components/drink-app/drink-header/drink-search/drink-search.component';
import { DrinkSortDateComponent } from './components/drink-app/drink-header/drink-sort-date/drink-sort-date.component';
import { DrinkFilterPipe } from './pipes/drink-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/drink-app/common/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    DrinkAppComponent,
    DrinkContentComponent,
    DrinksResultsComponent,
    DrinkHeaderComponent,
    DrinkFilterComponent,
    DrinkFullDetailsComponent,
    DrinkImageComponent,
    DrinkSearchComponent,
    DrinkSortDateComponent,
    DrinkFilterPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
