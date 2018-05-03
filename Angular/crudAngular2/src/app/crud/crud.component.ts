import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { debug } from 'util';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
users:any=[];

  constructor(public crudservice:CrudService) { }

  ngOnInit() {
   this.users=this.crudservice.getuser()
  }
  delete(user){
this.users.splice(this.users.indexOf(user),1)
  }
  update(user,name,age){
    debugger
  var index=  this.users.indexOf(user)
this.users[index].name=name;
this.users[index].age=age;

  }
}
