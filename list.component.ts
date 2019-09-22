import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Master } from '../master.enum';
import { HttpservService } from '../httpserv.service';
import { Userdto } from '../userdto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[HttpservService]
})
export class ListComponent implements OnInit {

  constructor(private _httpservice:HttpservService,private _route:Router) { }
  Users: any[];
  model = new Userdto();

  ngOnInit() {
    this._httpservice.get(Master.APIUrl + Master.List).subscribe(
      data => {
        console.log(data.user111);
        if(data != null)
        {
          this.Users = data.user111;
        }
      }
    )
  }

  UpdateUser(Id,FirstName,LastName) {
    this._route.navigate(['/Update',{Id:Id,fname:FirstName,lname:LastName}])
  }

  Delete(Id){
    alert(Id);
    this.model.Id = Id;
    this._httpservice.post(Master.APIUrl + Master.Delete,this.model).subscribe(
      data => {
        this._route.navigateByUrl('/List');
      })
  }
}
