import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Master } from '../master.enum';
import { HttpservService } from '../httpserv.service';
import { Userdto } from '../userdto';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css'],
  providers:[HttpservService]
})
export class InsertComponent {

  model = new Userdto();
  constructor(private _httpservice:HttpservService,private _route:Router) { }

  insert(model){
    model.CreatedDate = new Date();
    this._httpservice.post(Master.APIUrl + Master.Create,model).subscribe(
      data => {
        this._route.navigateByUrl("\List");
      })
  }
}
