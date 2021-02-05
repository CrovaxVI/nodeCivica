import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http : HttpClient) { }

  visualTubercolosi(){
    const url = 'https://3000-c24a7ab4-9660-446d-adf7-68a643598623.ws-eu03.gitpod.io/users/1';
    const headers = new HttpHeaders("");
    return this.http.get(url, {headers});
  }

  visualUHC(){
    const url = 'https://3000-c24a7ab4-9660-446d-adf7-68a643598623.ws-eu03.gitpod.io/users/2';
    const headers = new HttpHeaders("");
    return this.http.get(url, {headers});
  }

  visualVaccini(){
    const url = 'https://3000-c24a7ab4-9660-446d-adf7-68a643598623.ws-eu03.gitpod.io/users/3';
    const headers = new HttpHeaders("");
    return this.http.get(url, {headers});
  }
}
