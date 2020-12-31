import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,AfterViewInit {

  @ViewChild('f',{ static: true }) form : NgForm;

  constructor(private sharedService : SharedService) { }

  ngOnInit() {
    this.form.form.valueChanges.subscribe((form : any)=>{

      console.log(form);

      this.sharedService.searchInput.next(form.userName);
      

    });
  }

  ngAfterViewInit(){

    this.form.form.valueChanges.subscribe((form : any)=>{

      console.log(form);

      this.sharedService.searchInput.next(form.userName);
      

    });

  }


}
