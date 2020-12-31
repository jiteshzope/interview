import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchInput  = new Subject<string>();

  userList = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getUsersList() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
