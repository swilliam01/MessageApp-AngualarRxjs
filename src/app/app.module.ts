import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { MsgListComponent } from './msg-list/msg-list.component';
import { MsgServiceService } from '../app/msg-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    MsgListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [MsgServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
