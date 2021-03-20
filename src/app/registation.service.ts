import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistationService {
url='https://jsonplaceholder.typicode.com/posts';
  constructor( private http:HttpClient) { }

resister(userdata){
return this.http.post<any>(this.url,userdata);
}

}

