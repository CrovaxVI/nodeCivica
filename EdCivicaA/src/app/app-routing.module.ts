import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelazioneComponent } from './relazione/relazione.component';
import { TuberComponent } from './tuber/tuber.component';
import { UhcComponent } from './uhc/uhc.component';
import { VacciniComponent } from './vaccini/vaccini.component';


const routes: Routes = [
  {path: 'relazione', component:RelazioneComponent},
  {path: 'tuber', component:TuberComponent},
  {path: 'uhc', component:UhcComponent},
  {path: 'vaccini', component:VacciniComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
