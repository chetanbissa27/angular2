import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BugTracker } from './bugTracker/bugTracker.component'
import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe'


@NgModule({
  declarations: [
    AppComponent,BugTracker,TrimTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
