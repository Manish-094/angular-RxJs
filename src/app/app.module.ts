import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { ToArrayComponent } from './components/to-array/to-array.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { MapComponent } from './components/map/map.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { FilterComponent } from './components/filter/filter.component';
import { TapComponent } from './components/tap/tap.component';
import { TakeComponent } from './components/take/take.component';
import { RetryComponent } from './components/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './components/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
