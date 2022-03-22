import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from "./pages/authentication/authentication.component";
import {RegisterComponent} from "./pages/register/register.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {HomeComponent} from "./pages/home/home.component";
import {SentMessagesComponent} from "./pages/sent-messages/sent-messages.component";
import {InboxComponent} from "./pages/inbox/inbox.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {SendMessageComponent} from "./pages/send-message/send-message.component";
import { AccessGuardService } from './api/services/utils/access-guard.service';
import {SearchResultComponent} from "./pages/search-result/search-result.component";


const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'anonymous/:receiverId',
      component:SendMessageComponent
  },
  {
    path: ':connectedUserId',
    component: DashboardComponent,
    canActivate: [AccessGuardService],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sent-messages',
        component:SentMessagesComponent
      },
      {
        path: 'inbox',
        component:InboxComponent
      },
      {
        path: 'profile',
        component:ProfileComponent
      },
      {
        path:'send/:receiverId',
        component:SendMessageComponent
      },
      {
        path:'search/:searchKeyWord',
        component:SearchResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
