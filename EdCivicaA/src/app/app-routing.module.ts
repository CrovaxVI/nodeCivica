import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelazioneComponent } from './relazione/relazione.component';
import { DatiComponent } from './dati/dati.component';


const routes: Routes = [
  {path: 'relazione', component:RelazioneComponent},
  {path: 'dati', component:DatiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
