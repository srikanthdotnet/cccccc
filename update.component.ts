import { Component, OnInit } from '@angular/core';

import { Master } from '../master.enum';
import { ActivatedRoute,Router } from '@angular/router';
import { Userdto } from '../userdto';
import { HttpservService } from '../httpserv.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[HttpservService]
})
export class UpdateComponent implements OnInit {

  constructor(private _httpservice:HttpservService,private _ActivatedRoute:ActivatedRoute,private _router:Router) { }
  model = new Userdto();
  ngOnInit() {
    this.model.Id = this._ActivatedRoute.snapshot.paramMap.get('Id');
    this.model.FirstName = this._ActivatedRoute.snapshot.paramMap.get('fname');
    this.model.LastName = this._ActivatedRoute.snapshot.paramMap.get('lname');
  }

  update(model){
    this.model.CreatedDate = new Date();
    this._httpservice.post(Master.APIUrl + Master.Update,model).subscribe(data =>{
      alert('Success');
      this._router.navigateByUrl('/List');
    })
  }
}
