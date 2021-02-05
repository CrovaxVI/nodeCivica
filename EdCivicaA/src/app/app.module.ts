import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { RelazioneComponent } from './relazione/relazione.component';
import { TuberComponent } from './tuber/tuber.component';
import { UhcComponent } from './uhc/uhc.component';
import { VacciniComponent } from './vaccini/vaccini.component';

@NgModule({
  declarations: [
    AppComponent,
    RelazioneComponent,
    TuberComponent,
    UhcComponent,
    VacciniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
