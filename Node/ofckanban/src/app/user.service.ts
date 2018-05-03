import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
url='http://api2.foxteam.in';
  constructor(private http: Http) { }


getboarddetails(CompanyProjectBoardId,CompanyId,ProjectId,SubProjectId){
 // return this.http.get(this.url+'/getboarddetails?CompanyProjectBoardId='+CompanyProjectBoardId+'&CompanyId='+CompanyId+'&ProjectId='+ProjectId+'&SubProjectId='+SubProjectId).map(res=>res.json());
 return this.http.get(this.url+'/api/CompanyProjectBoard/GetOneBoard?CompanyProjectBoardId='+CompanyProjectBoardId+'&CompanyId='+CompanyId+'&ProjectId='+ProjectId+'&SubProjectId='+SubProjectId).map(res=>res.json());
}
getprojectlist(CompanyId){
  // return this.http.get(this.url+'/getboarddetails?CompanyProjectBoardId='+CompanyProjectBoardId+'&CompanyId='+CompanyId+'&ProjectId='+ProjectId+'&SubProjectId='+SubProjectId).map(res=>res.json());
  return this.http.get(this.url+'/api/Timesheet/GetProjectList?CompanyId='+CompanyId).map(res=>res.json());
 }
 getsubprojectlist(CompanyId,ProjectId){
  return this.http.get(this.url+'/api/Timesheet/GetSubProjectList?CompanyId='+CompanyId+'&ProjectId='+ProjectId).map(res=>res.json());
 }
 addtimesheet(data){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  //var body=JSON.stringify(data)
 // return this.http.post(this.url+'/updateboard',body,options).map(res=>res.json());
 debugger
 return this.http.post(this.url+'/api/Timesheet/AddTimesheet',data,options).map(res=>res.json());
 }
updateboard(CompanyProjectBoardId,CompanyId,ProjectId,SubProjectId,boardname,obj){
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  var body=JSON.stringify({
    "ProjectId" : ProjectId, 
    "SubProjectId" : SubProjectId, 
    "CompanyId" : CompanyId, 
    "CompanyProjectBoardId" : CompanyProjectBoardId,
    "Json":JSON.stringify(obj),
    "BoardName":boardname
  })
 // return this.http.post(this.url+'/updateboard',body,options).map(res=>res.json());
 return this.http.post(this.url+'/api/CompanyProjectBoard/UpdateBoard',body,options).map(res=>res.json());
}
getemplist(CompanyId){
 // http://api.foxteam.in/api/Employee/GetActiveEmployeeList?CompanyId=1
 return this.http.get(this.url+'/api/Employee/GetActiveEmployeeList?CompanyId='+CompanyId).map(res=>res.json());
}
getboardlist(companyId,ProjectId,SubProjectId){
    // return this.http.get(this.url+'/getboarddetails?CompanyProjectBoardId='+CompanyProjectBoardId+'&CompanyId='+CompanyId+'&ProjectId='+ProjectId+'&SubProjectId='+SubProjectId).map(res=>res.json());
    return this.http.get(this.url+'/api/CompanyProjectBoard/GetBoards?CompanyId='+companyId+'&ProjectId='+ProjectId+'&SubProjectId='+SubProjectId).map(res=>res.json());
}
}
