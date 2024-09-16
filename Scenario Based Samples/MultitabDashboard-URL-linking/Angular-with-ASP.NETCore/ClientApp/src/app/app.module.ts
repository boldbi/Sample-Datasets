import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appService } from './app.service';
import { AppComponent } from './app.component';
import { DashboardListing } from './dashboard-listing/dashboard-listing.component';

@NgModule({
   imports: [
   BrowserModule,
       RouterModule.forRoot([
       { path: '', component: DashboardListing },
        ]
    ),
    HttpClientModule
    ],
       providers: [appService],
       declarations: [
       AppComponent,
       DashboardListing,
    ],

    bootstrap: [AppComponent]
    })
export class AppModule { }
