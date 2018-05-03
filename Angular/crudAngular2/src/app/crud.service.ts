import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  constructor() { }
add(user){

}
getuser(){
  var users=[{name:"rani",age:25},{name:"Rahul",age:22},{name:"vidya",age:28}];
  return users;
}
}
