import { Component, OnInit,ViewChild,ViewContainerRef,Input } from '@angular/core';
import { jqxTreeGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxtreegrid';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { UserService } from '../user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UUID } from 'angular2-uuid';
import { debug } from 'util';
@Component({
  selector: 'app-kanbantree-view',
  templateUrl: './kanbantree-view.component.html',
  styleUrls: ['./kanbantree-view.component.css']
})

export class KanbantreeViewComponent implements OnInit {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent;
    @Input() boards:any={};
    boardname=this.boards.boardName;
    lists:any[];
    source:any={};
   columns:any[];
   dataAdapter: any;
   exportSettings:any;
    // employees: any[] = [
    //     { "EmployeeID": 1, "FirstName": "Nancy", "LastName": "Davolio", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-05-01 00:00:00", "BirthDate": "1948-12-08 00:00:00", "City": "Seattle", "Address": "507 - 20th Ave. E.Apt. 2A" },
    //     { "EmployeeID": 2, "FirstName": "Andrew", "LastName": "Fuller", "ReportsTo": null, "Country": "USA", "Title": "Vice President, Sales", "HireDate": "1992-08-14 00:00:00", "BirthDate": "1952-02-19 00:00:00", "City": "Tacoma", "Address": "908 W. Capital Way" },
    //     { "EmployeeID": 3, "FirstName": "Janet", "LastName": "Leverling", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1992-04-01 00:00:00", "BirthDate": "1963-08-30 00:00:00", "City": "Kirkland", "Address": "722 Moss Bay Blvd." },
    //     { "EmployeeID": 4, "FirstName": "Margaret", "LastName": "Peacock", "ReportsTo": 2, "Country": "USA", "Title": "Sales Representative", "HireDate": "1993-05-03 00:00:00", "BirthDate": "1937-09-19 00:00:00", "City": "Redmond", "Address": "4110 Old Redmond Rd." },
    //     { "EmployeeID": 5, "FirstName": "Steven", "LastName": "Buchanan", "ReportsTo": 2, "Country": "UK", "Title": "Sales Manager", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1955-03-04 00:00:00", "City": "London", "Address": "14 Garrett Hill" },
    //     { "EmployeeID": 6, "FirstName": "Michael", "LastName": "Suyama", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1993-10-17 00:00:00", "BirthDate": "1963-07-02 00:00:00", "City": "London", "Address": "Coventry House Miner Rd." },
    //     { "EmployeeID": 7, "FirstName": "Robert", "LastName": "King", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-01-02 00:00:00", "BirthDate": "1960-05-29 00:00:00", "City": "London", "Address": "Edgeham Hollow Winchester Way" },
    //     { "EmployeeID": 8, "FirstName": "Laura", "LastName": "Callahan", "ReportsTo": 2, "Country": "USA", "Title": "Inside Sales Coordinator", "HireDate": "1994-03-05 00:00:00", "BirthDate": "1958-01-09 00:00:00", "City": "Seattle", "Address": "4726 - 11th Ave. N.E." },
    //     { "EmployeeID": 9, "FirstName": "Anne", "LastName": "Dodsworth", "ReportsTo": 5, "Country": "UK", "Title": "Sales Representative", "HireDate": "1994-11-15 00:00:00", "BirthDate": "1966-01-27 00:00:00", "City": "London", "Address": "7 Houndstooth Rd." }
    // ];

    // source: any =
    // {
    //     dataType: "json",
    //     dataFields: [
    //         { name: 'EmployeeID', type: 'number' },
    //         { name: 'ReportsTo', type: 'number' },
    //         { name: 'FirstName', type: 'string' },
    //         { name: 'LastName', type: 'string' },
    //         { name: 'Country', type: 'string' },
    //         { name: 'City', type: 'string' },
    //         { name: 'Address', type: 'string' },
    //         { name: 'Title', type: 'string' },
    //         { name: 'HireDate', type: 'date' },
    //         { name: 'BirthDate', type: 'date' }
    //     ],
    //     hierarchy:
    //     {
    //         keyDataField: { name: 'EmployeeID' },
    //         parentDataField: { name: 'ReportsTo' }
    //     },
    //     id: 'EmployeeID',
    //     localData: this.employees
    // };

  
        
    // columns: any[] = [
    //     { text: 'FirstName', columnGroup: 'Name', dataField: 'FirstName', width: 200 },
    //     { text: 'LastName', columnGroup: 'Name', dataField: 'LastName', width: 200 },
    //     { text: 'Title', dataField: 'Title', width: 160 },
    //     { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
    //     { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
    //     { text: 'Address', dataField: 'Address', width: 250 },
    //     { text: 'City', dataField: 'City', width: 120 },
    //     { text: 'Country', dataField: 'Country' }
    // ];

    columnGroups: any[] =
    [
        { text: 'Assigned Employees(Only 2 shown)', name: 'itemNames',align: 'center' },
        { text: 'Efforts Estimate', name: 'TimeEstimate',align: 'center' }
    ];
    ready(): void {
        this.treeGrid.expandAll();
      // this.treeGrid.expandRow(0);
    };
    excelExportClick(): void {
       // this.treeGrid.expandAll();
        this.treeGrid.exportData('xls');
    };
    Dwidth="90%";
   
  constructor(vcr: ViewContainerRef,  public toastr: ToastsManager, private userservice: UserService) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {
    
    this.lists=Object.assign([], this.boards.lists) ;
   // let cloned = this.boards.lists.map(x => Object.assign({}, x));
   // this.lists=cloned
    console.log(this.boards.boardName);
    this.source={
        dataType: "json",
        dataFields: [
            { name: 'uid', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'cards', type: 'array' },
            { name: 'itemName1', type: 'string',map:"addedMembers>0>itemName" },
            { name: 'itemName2', type: 'string',map:"addedMembers>1>itemName" },
            { name: 'itemName3', type: 'string',map:"addedMembers>2>itemName" },
            { name: 'estimateHrs1', type: 'string',map:"addedMembers>0>estimateHrs" },
            { name: 'estimateMin1', type: 'string',map:"addedMembers>0>estimateMin" },
            { name: 'estimateHrs2', type: 'string',map:"addedMembers>1>estimateHrs" },
            { name: 'estimateMin2', type: 'string',map:"addedMembers>1>estimateMin" },
            { name: 'estimateHrs3', type: 'string',map:"addedMembers>2>estimateHrs" },
            { name: 'estimateMin3', type: 'string',map:"addedMembers>2>estimateMin" }
            // { name: 'EmployeeName', value: 'EmployeeID', values: { source: employeesAdapter.records, value: 'EmployeeID', name: 'EmployeeName' } },
        ],
       // root: "cards",
        localData: this.lists,
        hierarchy:{ 
            root: "cards"
        },
              id: "uid"
    }
    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.columns = [
        
        { text: "State", datafield: "name", width:"11%" },
        { text: "Task", datafield: "description", width: "20%"},
        { text: "Complexity", datafield: "complexityLevel", width: "9%"},
        { text: "From Date", datafield: "FromDate", width: "8%"},
        { text: "To Date", datafield: "ToDate", width: "8%"},
        { text: "Completed(%)", datafield: "TaskCompleted", width: "11%"},
        { text: "Name", datafield: 'itemName1',columngroup: 'itemNames', width: "8%" },
        { text: "Efforts Estimate", datafield: "estimateHrs1",columngroup: 'itemNames', width: "12%"},
        { text: "Name", datafield: "itemName2",columngroup: 'itemNames', width: "8%"},
        { text: "Efforts Estimate", datafield: "estimateHrs2",columngroup: 'itemNames', width: "12%"},
      //  { text: "Name", datafield: "itemName3",columngroup: 'itemNames', width: "10%"},
        //{ text: "Efforts Estimate", datafield: "estimateHrs3",columngroup: 'itemNames', width: "8%"},
        // { text: "See details", datafield: "", width: "10%", cellsRenderer:this.renderer},
        
    ]
    this.exportSettings={columnsHeader: true, hiddenColumns: false, serverURL: null, characterSet: null, collapsedRecords: true, recordsInView: true,fileName:""+this.boards.boardName}
  }
//   conditorendere(row: number, column: any, value: any){
//              if(value){
//                  return value;
//              }
//              else "None"
//   }
  renderer (row: number, column: any, value: any) {
      	return '<input type="button" (click)="showdetailscard(1)" class="btn btn-success" id="btn' + row + '" value="Details"/>'
 }
 
showdetailscard(cardid){
   
    console.log(cardid)
}

}
