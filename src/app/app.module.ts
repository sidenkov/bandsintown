import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSidenavContent} from '@angular/material/sidenav';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
