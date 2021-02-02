import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EdCivicaA';
  lista : Object[];
  ob : Observable<Object>;

  constructor(private http:HttpClient, private sanitazer:DomSanitizer){}
  tuber(){
    this.ob=this.http.get("https://3000-c24a7ab4-9660-446d-adf7-68a643598623.ws-eu03.gitpod.io/users/1");
    this.ob.subscribe(this.getData)
  }

  getData = (data) => {
    this.lista = data;
  }
}
