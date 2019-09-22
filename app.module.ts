import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';

const RoutesData : Routes = [
  {path:'',component:ListComponent,pathMatch:'full'},
  {path:'List',component:ListComponent,pathMatch:'full'},
  {path:'Create',component:InsertComponent,pathMatch:'full'},
  {path:'Update',component:UpdateComponent,pathMatch:'full'},
  {path:'Delete',component:DeleteComponent,pathMatch:'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    InsertComponent,
    ListComponent,
    UpdateComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RoutesData),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
