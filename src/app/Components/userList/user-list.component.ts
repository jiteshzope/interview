import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/user';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : Observable<User[]>;

  search :string='';

  constructor(private sharedService : SharedService) { }

  ngOnInit(){
    this.sharedService.getUsersList().subscribe((data:User[])=>{
      this.sharedService.userList.next(data);
      this.users = this.sharedService.userList;
    });

    this.sharedService.searchInput.subscribe((search:string)=>{
      this.search = search;
      console.log('search : ',search);
    });

  }

  getIfToDisplay(username : string){

    console.log("username : ",username);
    console.log("search", this.search)

    if(username.toLocaleLowerCase().includes(this.search.toLocaleLowerCase())){
      
      return true;
    }
    return false;
      
  }

}
