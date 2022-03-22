import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './components/menu/menu.component';
import {AuthenticationComponent} from "./pages/authentication/authentication.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {RegisterComponent} from "./pages/register/register.component";
import {InboxComponent} from "./pages/inbox/inbox.component";
import {SentMessagesComponent} from "./pages/sent-messages/sent-messages.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import { MessageComponent } from './components/message/message.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HttpInterceptorService } from './api/services/utils/http-interceptor.service';
import { SearchResultComponent } from './pages/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    InboxComponent,
    SentMessagesComponent,
    ProfileComponent,
    MenuComponent,
    MessageComponent,
    AvatarComponent,
    SendMessageComponent,
    SearchResultComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
  },HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
