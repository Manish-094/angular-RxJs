import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { FilterComponent } from './components/filter/filter.component';
import { FromEventComponent } from './components/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { MapComponent } from './components/map/map.component';
import { OfFromComponent } from './components/of-from/of-from.component';
import { PluckComponent } from './components/pluck/pluck.component';
import { RetryComponent } from './components/retry/retry.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TakeComponent } from './components/take/take.component';
import { TapComponent } from './components/tap/tap.component';
import { ToArrayComponent } from './components/to-array/to-array.component';

const routes: Routes = [
  {path:'fromEvent', component: FromEventComponent},
  {path:'interval',component:IntervalComponent},
  {path:'ofFrom',component:OfFromComponent},
  {path:'toarray',component:ToArrayComponent},
  {path:'customObs',component:CustomObservableComponent},
  {path:'map',component:MapComponent},
  {path:'pluck',component:PluckComponent},
  {path:'filter',component:FilterComponent},
  {path:'tap',component:TapComponent},
  {path:'take',component:TakeComponent},
  {path:'retry',component:RetryComponent},
  {path:'debounce',component:DebounceTimeComponent},
  {path:'subject',component:SubjectComponent}
]
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
