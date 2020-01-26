import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PriestComponent } from './priest/priest.component';
import { PatronComponent } from './patron/patron.component';
import { PatronListComponent } from './patron-list/patron-list.component';
import { DashboardEventComponent } from "./dashboard-event/dashboard-event.component";
import { HistoryComponent } from './history/history.component';
import { ManageEventsComponent } from './manage-events/manage-events.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { PendingEventsComponent } from './pending-events/pending-events.component';
import { TempleEventsComponent } from './temple-events/temple-events.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PatronList2Component } from './patron-list2/patron-list2.component';
import { PriestList2Component } from './priest-list2/priest-list2.component';
import { EventscheduleComponent } from './eventschedule/eventschedule.component';


const homeRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'dashboard-event',
        component:DashboardEventComponent
      },
      {
        path:'priest',
        component:PriestComponent
      },
      {
        path:'priest-list2',
        component:PriestList2Component
      },
      {
        path:'patron',
        component:PatronComponent
      },
      {
        path:'patron-list',
        component:PatronListComponent
      },
      {
        path:'patron-list2',
        component:PatronList2Component
      },
      {
        path:'history',
        component:HistoryComponent
      },
      {
        path:'manage-events',
        component:ManageEventsComponent
      },
      {
        path:'upcoming-events',
        component:UpcomingEventsComponent
      },
      {
        path:'pending-events',
        component:PendingEventsComponent
      },
      {
        path:'temple-events',
        component:TempleEventsComponent
      },
      {
        path:'feedback',
        component:FeedbackComponent
      },
      {
        path:'eventschedule',
        component:EventscheduleComponent
      }
    ]
   },
  ];
@NgModule({
   imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
