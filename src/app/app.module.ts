import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [BrowserModule, FormsModule], // Include FormsModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}