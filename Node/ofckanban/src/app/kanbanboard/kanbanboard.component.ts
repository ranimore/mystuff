import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CardStore } from '../CardStore';
import { ListSchema } from '../ListSchema';
import { boardSchema } from '../boardschema';
import { ActivatedRoute, Routes, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { UUID } from 'angular2-uuid';
import { DatePipe } from '@angular/common';
import { debug } from 'util';
import { Toast } from 'ng2-toastr/src/toast';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-kanbanboard',
  templateUrl: './kanbanboard.component.html',
  styleUrls: ['./kanbanboard.component.css']
})
export class KanbanboardComponent implements OnInit {
  checkinStatus:boolean=false;
  currentDate:Date;
  cardMembers: any[];
  invitedemp: any[];
  myinvitedmember: any[] = [];
  mycardmembers: any[] = [];
  cardStore: CardStore;
  private sub: any;
  displayAddlist: boolean = false;
  lists: ListSchema[];
  boards: any = {};
  board: any = '';
  displayAddCard = false;
  displayeditlist: boolean = false;
  displayeditcard: boolean = false;
  carddetails: any = [];
  CompanyProjectBoardId: any = '';  //change when using mvc
  CompanyId: Number;
  ProjectId: Number;
  SubProjectId: Number;
  EmpId: Number;
  dropdownList = [];
  selectedItems = [];
  dropdownsetting = {};
  cardemplist = [];
  totalEstimateHrs = 0;
  totalEstimateMins = 0;
  totalOriginalHrs = 0;
  totalOriginalMins = 0;
  NotEstimatedCards = 0;
  NotOrgTimeCards = 0;
  totatlUnestimatedCards = 0;
  totalCards = 0;
  Movecards = false;
  boardslist: any = [];
  SelectedBoard;
  CardsToMove: any = [];
  //selectedemp =[];
  treeview: boolean = false;
//   daterangepickerOptions = {
//     startDate: '09/01/2017',
//     endDate: '09/02/2017',
//     format: 'DD/MM/YYYY'
// }
StatusDescription:any;
Duration:any;
StatusPercentage:any;
projectlist:any=[];
subprojectlist:any=[];
  constructor(vcr: ViewContainerRef, private userservice: UserService, private router: Router, public toastr: ToastsManager, private route: ActivatedRoute, ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
   this.currentDate=new Date();
   this.currentDate.setHours(0,0,0);
    this.SelectedBoard = ''
    this.sub = this.route.queryParams.subscribe(params => {
      this.board = params['id'];
      this.CompanyProjectBoardId = params['CompanyProjectBoardId'];
      this.ProjectId = params['ProjectId'];
      this.SubProjectId = params['SubProjectId'];
      this.CompanyId = params['CompanyId'];
      this.EmpId = params['EmpId'];
      localStorage.setItem('boardid', this.board);
    });
    this.setMockData();
    this.userservice.getboardlist(this.CompanyId, this.ProjectId, this.SubProjectId).subscribe(allboards => {
      this.boardslist = allboards;
    })
    this.userservice.getemplist(this.CompanyId).subscribe(result2 => {
      result2.forEach((item) => {
        if (this.EmpId == item.empId) {
          localStorage.setItem("name", item.empName + " " + item.LastName);
        }
        this.dropdownList.push({ "id": item.empId, "itemName": item.empName + " " + item.LastName })
      })
    })
    // this.userservice.getprojectlist(this.CompanyId).subscribe(prolist => {
    //  this.projectlist=prolist;
    // })
    // this.userservice.getsubprojectlist(this.CompanyId,this.ProjectId ).subscribe(subprolist => {
    //   this.subprojectlist=subprolist;
    //  })
    this.dropdownsetting = {
      singleSelection: false,
      text: "Select Employee",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "col-md-6"
    };
    // this.boardmembers=this.boards.invetedMembers;

    //touch
    function touchHandler(event) {
      var touches = event.changedTouches,
        first = touches[0],
        type = "";
      switch (event.type) {
        case "touchstart": type = "mousedown"; break;
        case "touchmove": type = "mousemove"; event.stopPropagation(); event.preventDefault(); break;
        case "touchend": type = "mouseup"; break;
        default: return;
      }

      // initMouseEvent(type, canBubble, cancelable, view, clickCount,
      //                screenX, screenY, clientX, clientY, ctrlKey,
      //                altKey, shiftKey, metaKey, button, relatedTarget);

      var simulatedEvent = document.createEvent("MouseEvent");
      simulatedEvent.initMouseEvent(type, true, true, window, 1,
        first.screenX, first.screenY,
        first.clientX, first.clientY, false,
        false, false, false, 0/*left*/, null);

      first.target.dispatchEvent(simulatedEvent);

    }
    $(document).ready(function () {

      $("body").tooltip({ selector: '[data-toggle=tooltip]' });
     
      //$('#style-1').droppable();
      // document.addEventListener("touchstart", touchHandler, false);
      // document.addEventListener("touchmove", touchHandler, false);
      // document.addEventListener("touchend", touchHandler, false);
      // document.addEventListener("touchcancel", touchHandler, false);
    });

    //tree view data

  }
  setMockData(): void {
    this.userservice.getboarddetails(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId).subscribe(result => {
      //  const boards: boardSchema[] = result.result[0].Json;
      this.boards = jQuery.parseJSON(result.Json);
      // this.lists = boards[0].lists;
      if (this.boards.invetedMembers != undefined) {
        this.boards.invetedMembers.forEach((item) => {
          this.cardemplist.push({ "id": item.id, "itemName": item.itemName });
          var name = item.itemName.split(' ').map(function (s) { return s.charAt(0); }).join('');
          this.myinvitedmember.push({ "id": item.id, "itemName": name, "fullname": item.itemName });
        })
        this.boards.invetedMembers.forEach((item) => {
          this.selectedItems.push({ "id": item.id, "itemName": item.itemName,"CapacityHrs" :item.CapacityHrs})
        })
        //  this.invitedemp=this.boards.invetedMembers;
      }
      this.showMyCardsblamnk();
      this.calculateEstimateTime();
      this.calculateOriginalTime();
      this.calculatesCardsCount();
    })

  }
  calculatePercentage(est, cap): number {

    if (est == undefined) {
      est = 0.00;
    }
    if (cap == undefined) {
      cap = 0.00;
    }
    est = Number(est);
    cap = Number(cap);
    return Math.round((est / cap) * 100);
  }
  calculatesCardsCount() {
    this.totalCards = 0;
    this.totatlUnestimatedCards = 0;
    for (let i = 0; i < this.boards.lists.length; i++) {

      for (let j = 0; j < this.boards.lists[i].cards.length; j++) {
        this.totalCards = this.totalCards + 1;
        var esthrs = this.boards.lists[i].cards[j].estimateHrs;
        var estMin = this.boards.lists[i].cards[j].estimateMin;
        var orgHrs = this.boards.lists[i].cards[j].originalHrs;
        var orgMin = this.boards.lists[i].cards[j].originalMin;
        if ((esthrs == 0 || esthrs == undefined) && (estMin == 0 || estMin == undefined)) {
          this.totatlUnestimatedCards = this.totatlUnestimatedCards + 1;
        }
      }
    }
  }

  calculateEstimateTime() {
    this.totalEstimateHrs = 0;
    this.totalEstimateMins = 0;
    this.NotEstimatedCards = 0;

    for (let i = 0; i < this.boards.lists.length; i++) {
      if (this.boards.lists[i].cards != undefined) {
        for (let j = 0; j < this.boards.lists[i].cards.length; j++) {
          if ((this.boards.lists[i].cards[j].estimateHrs == 0 || this.boards.lists[i].cards[j].estimateHrs == undefined) && (this.boards.lists[i].cards[j].estimateMin == 0 || this.boards.lists[i].cards[j].estimateMin == undefined)) {
            this.NotEstimatedCards = this.NotEstimatedCards + 1;
          }
          var hours = 0, minutes = 0;
          if (this.boards.lists[i].cards[j].estimateMin != undefined) {
            hours = Math.floor(this.boards.lists[i].cards[j].estimateMin / 60);
            minutes = this.boards.lists[i].cards[j].estimateMin % 60;
          }
          if (this.boards.lists[i].cards[j].estimateHrs == undefined) {
            this.boards.lists[i].cards[j].estimateHrs = 0;
          }
          if ((this.totalEstimateMins + minutes) >= 60) {
            var thrs = Math.floor((this.totalEstimateMins + minutes) / 60);
            var tmin = (this.totalEstimateMins + minutes) % 60;
            this.totalEstimateHrs = thrs + Number(this.totalEstimateHrs) + hours + Number(this.boards.lists[i].cards[j].estimateHrs);
            this.totalEstimateMins = tmin;

          }
          else {
            this.totalEstimateHrs = Number(this.totalEstimateHrs) + hours + Number(this.boards.lists[i].cards[j].estimateHrs);
            this.totalEstimateMins = this.totalEstimateMins + minutes;
          }

        }
      }

    }
  }
  calculateOriginalTime() {

    this.totalOriginalHrs = 0;
    this.totalOriginalMins = 0;
    this.NotOrgTimeCards = 0;

    for (let i = 0; i < this.boards.lists.length; i++) {
      if (this.boards.lists[i].cards != undefined) {
        for (let j = 0; j < this.boards.lists[i].cards.length; j++) {
          if ((this.boards.lists[i].cards[j].originalHrs == 0 || this.boards.lists[i].cards[j].originalHrs == undefined) && (this.boards.lists[i].cards[j].originalMin == 0 || this.boards.lists[i].cards[j].originalMin == undefined)) {
            this.NotOrgTimeCards = this.NotOrgTimeCards + 1;
          }
          var hours = 0, minutes = 0;
          if (this.boards.lists[i].cards[j].originalMin != undefined) {
            hours = Math.floor(this.boards.lists[i].cards[j].originalMin / 60);
            minutes = this.boards.lists[i].cards[j].originalMin % 60;
          }
          if (this.boards.lists[i].cards[j].originalHrs == undefined) {
            this.boards.lists[i].cards[j].originalHrs = 0;
          }
          if ((this.totalOriginalMins + minutes) >= 60) {
            var thrs = Math.floor((this.totalOriginalMins + minutes) / 60);
            var tmin = (this.totalOriginalMins + minutes) % 60;
            this.totalOriginalHrs = thrs + Number(this.totalOriginalHrs) + hours + Number(this.boards.lists[i].cards[j].originalHrs);
            this.totalOriginalMins = tmin;
          }
          else {
            this.totalOriginalHrs = Number(this.totalOriginalHrs) + hours + Number(this.boards.lists[i].cards[j].originalHrs);
            this.totalOriginalMins = this.totalOriginalMins + minutes;
          }

        }
      }
    }
  }
  allowDrop($event) {
    $event.preventDefault();
  }

  showMyCards() {
    for (var i = 0; i < this.boards.lists.length; i++) {
      for (var j = 0; j < this.boards.lists[i].cards.length; j++) {
        if (this.boards.lists[i].cards[j].addedMembers != undefined) {
          for (var k = 0; k < this.boards.lists[i].cards[j].addedMembers.length; k++) {
            if (this.EmpId == this.boards.lists[i].cards[j].addedMembers[k].id) {
              if (this.boards.lists[i].cards[j].highlightme == 'highlightme') {
                this.boards.lists[i].cards[j].highlightme = '';
              }
              else {
                this.boards.lists[i].cards[j].highlightme = 'highlightme';
              }
            }
            // else{
            //   this.boards.lists[i].cards[j].highlightme=''
            // }
          }
        }
      }
    }
  }
  showMyCardsblamnk() {
    for (var i = 0; i < this.boards.lists.length; i++) {
      for (var j = 0; j < this.boards.lists[i].cards.length; j++) {
        this.boards.lists[i].cards[j].highlightme = '';
      }
    }
  }
  inviteMember() {
    this.boards.invetedMembers = Object.assign([], this.selectedItems)
    // this.invitedemp;
    this.cardemplist = [];
    this.myinvitedmember = [];
    this.boards.invetedMembers.forEach((item) => {
      this.cardemplist.push({ "id": item.id, "itemName": item.itemName });

      var name = item.itemName.split(' ').map(function (s) { return s.charAt(0); }).join('');
      this.myinvitedmember.push({ "id": item.id, "itemName": name, "fullname": item.itemName });
    })
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  drop($event, list) {

    $event.preventDefault();
    var card = JSON.parse($event.dataTransfer.getData('card'));
    const oldlistid = $event.dataTransfer.getData('list');
    const oldcard = $event.dataTransfer.getData('cardindex');
    // var jsonObj = JSON.stringify({
    //   newlistid: list.uid,
    //   oldlistid: oldlistid,
    //   card: card
    // })
    var oldlistindex = Number(oldlistid);
    var oldcardindex = Number(oldcard);
    var newlistindex = this.boards.lists.indexOf(list);
    // var cardindex = this.boards.lists[oldlistindex].cards.indexOf(Number());
    this.boards.lists[newlistindex].cards.push(card);

    this.boards.lists[Number(oldlistid)].cards.splice(oldcardindex, 1);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  assignmember(list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].selectedemp = Object.assign([], this.boards.lists[listindex].cards[cardindex].addedMembers)
    this.boards.lists[listindex].cards[cardindex].mycardmembers = [];
    if (this.boards.lists[listindex].cards[cardindex].addedMembers != undefined) {
      this.boards.lists[listindex].cards[cardindex].addedMembers.forEach((item) => {

        var name = item.itemName.split(' ').map(function (s) { return s.charAt(0); }).join('');
        this.boards.lists[listindex].cards[cardindex].mycardmembers.push({ "id": item.id, "itemName": name, "fullname": item.itemName });
      })
    }
    // this.boards.lists[listindex].cards[cardindex].selectedemp=this.boards.lists[listindex].cards[cardindex].addedMembers;
  }

  addcard(value, list) {
    var newid = UUID.UUID();
    var jsonObj = {
      uid: newid,
      description: value,
      checklist: [],
      comment: []
    }

    this.boards.lists[this.boards.lists.indexOf(list)].cards.push(jsonObj);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
    this.calculateEstimateTime();
    this.calculateOriginalTime();
    this.calculatesCardsCount();
  }
  filltimesheet(card){
    
    var obj=JSON.stringify({
      "_date":this.currentDate,
      "EmpId":this.EmpId,
      "ProjectCode":this.ProjectId,
      "SubProjectID":this.SubProjectId,
      "StatusDescription":this.StatusDescription,
      "Duration":this.Duration,
      "StatusPercentage":this.StatusPercentage,
      "CheckInStatus":this.checkinStatus
    })

    this.userservice.addtimesheet(obj).subscribe(result => {
      this.StatusDescription='';
      this.Duration='';
  this.StatusPercentage='';
    });


    

  }
  toggleEditlist(list) {
    // this.displayeditlist = !this.displayeditlist;
    list.editmode = true;
  }
  toggleaboutEdit(card) {
    card.abouteditmode = true;
  }
  editname(value: string, list) {
    // var jsonObj = JSON.stringify({
    //   listid: list.uid,
    //   name: value
    // })
    this.boards.lists[this.boards.lists.indexOf(list)].name = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  toggletimesheet(card){
    
    this.StatusDescription=card.aboutCard;
    this.Duration=card.estimateHrs;
this.StatusPercentage=card.TaskCompleted
    $('#timesheet' + card.uid).modal('show');
  }
  showdetails(id) {
    $('#modal' + id).modal('show');
   // this.currentDate=new Date();
    //$('.input-daterange').datepicker({});
    // $('#fromdate').datepicker({});
    // $('#todate').datepicker({});
  }
  // show(){
  //   $('#fromdate').datepicker({});
  //   $('#todate').datepicker({});
  // }
  Summary() {
    $('#Summary').modal('show');
    this.calculateMytime();
  }
  addcomment(value: string, card, list) {
    var newid = UUID.UUID();
    var obj = {
      "text": value,
      "dateTime": new Date(),
      "by": localStorage.getItem("name"),
      "uid": newid
    }
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].comment.push(obj);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  addchecklist(value: string, card, list) {
    var newid = UUID.UUID();
    var obj = {
      "Title": value,
      "Items": [],
      "uid": newid
    }
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].checklist.push(obj);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  attachlinkadrs(value: string, title: string, card, list) {
    var newid = UUID.UUID();
    value = (value.indexOf('://') === -1) ? 'http://' + value : value;
    var obj = {
      "Title": title,
      "address": value,
      "uid": newid
    }

    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    if (this.boards.lists[listindex].cards[cardindex].Links == undefined) {
      this.boards.lists[listindex].cards[cardindex].Links = [];
    }
    this.boards.lists[listindex].cards[cardindex].Links.push(obj);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  openlink(link, event) {
    window.open(link, '_blank');

  }
  addckecklistItem(value: string, checklist, card, list) {
    var newid = UUID.UUID();
    var obj =
      {
        "item": value,
        "status": false,
        "uid": newid
      }

    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    var checklistindex = this.boards.lists[listindex].cards[cardindex].checklist.indexOf(checklist);
    this.boards.lists[listindex].cards[cardindex].checklist[checklistindex].Items.push(obj);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  toggleDisplayAddCard(list) {
    //this.displayAddCard = !this.displayAddCard;
    list.addcardmode = true;
  }
  statusChange(subitem, id, cardid) {
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  toggleAddlist() {
    this.displayAddlist = !this.displayAddlist;
  }
  addnewlist(value: string) {
    var newid = UUID.UUID();
    var jsonObj = {
      name: value,
      cards: [],
      uid: newid
    }

    this.boards.lists.push(jsonObj);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }

  dragStart(ev, list, card) {
    // $('#'+card.uid).draggable();
    var el = document.getElementById('' + card.uid);
    var index = this.boards.lists.indexOf(list);
    var cardsindex = this.boards.lists[index].cards.indexOf(card);
    ev.dataTransfer.setData('card', JSON.stringify(card));
    ev.dataTransfer.setData('list', index);
    ev.dataTransfer.setData('cardindex', cardsindex);
  }
  toggleEdit(card) {
    card.editmode = true;
  }
  removeList(list) {
    $('#list' + list.uid).modal('show');
  }
  remove(card, list) {
    $('#remove' + card.uid).modal('show');
  }
  removeConfirm(card, list) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards.splice(cardindex, 1);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
    this.calculateEstimateTime();
    this.calculateOriginalTime();
    this.calculatesCardsCount();
  }
  removeConfirmList(list) {
    var listindex = this.boards.lists.indexOf(list);
    if (list.cards.length > 0) {
      this.toastr.error('Some cards are present in this lane.Can not delete it!', 'Failed!');
    }
    else if (this.boards.lists.length <= 1) {
      this.toastr.error('This is only one lane remaining in this board.Can not delete it!', 'Failed!');
    }
    else {
      this.boards.lists.splice(listindex, 1);
      this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
      });
    }
  }
  editCard(value, list, card) {
    var jsonObj = JSON.stringify({
      listid: list.uid,
      card: {
        description: value,
        uid: card.uid
      }
    })
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].description = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  editaboutCard(value: string, list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].aboutCard = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  editComplexityLevel(value,list,card){
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].complexityLevel = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    }); 
  }
  editTaskPerccent(value,list,card){
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].TaskCompleted = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    }); 
  }
  editfromTodate(fromdate,todate,list,card){
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].FromDate = fromdate;
    this.boards.lists[listindex].cards[cardindex].ToDate = todate;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }

  editestimate(hrs, mins, list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].estimateHrs = hrs;
    this.boards.lists[listindex].cards[cardindex].estimateMin = mins;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
    this.calculateEstimateTime();
    this.calculatesCardsCount();
  }
  editoriginalTime(hrs, mins, list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].originalHrs = hrs;
    this.boards.lists[listindex].cards[cardindex].originalMin = mins;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
    this.calculateOriginalTime();
    this.calculatesCardsCount();
  }

  deletecomment(item, card, list) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    var commentindex = this.boards.lists[listindex].cards[cardindex].comment.indexOf(item);
    this.boards.lists[listindex].cards[cardindex].comment.splice(commentindex, 1);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  deletelink(item, card, list) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    var Linkindex = this.boards.lists[listindex].cards[cardindex].Links.indexOf(item);
    this.boards.lists[listindex].cards[cardindex].Links.splice(Linkindex, 1);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  editcomment(value, item, card, list) {
    var obj = JSON.stringify({
      comment: item.comment,
      _id: item._id
    })
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    var commentindex = this.boards.lists[listindex].cards[cardindex].comment.indexOf(item);
    this.boards.lists[listindex].cards[cardindex].comment[commentindex].text = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });

  }
  addmember(list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].addedMembers = Object.assign([], this.boards.lists[listindex].cards[cardindex].selectedemp);
    this.boards.lists[listindex].cards[cardindex].mycardmembers = [];
    this.boards.lists[listindex].cards[cardindex].addedMembers.forEach((item) => {

      var name = item.itemName.split(' ').map(function (s) { return s.charAt(0); }).join('');
      this.boards.lists[listindex].cards[cardindex].mycardmembers.push({ "id": item.id, "itemName": name, "fullname": item.itemName });
    })
    this.showMyCardsblamnk();
    this.calToralOrgTime(list, card);
    this.calToralEstTime(list, card);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  editEstTime(hrs, min, list, card, emp) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    var empindex = this.boards.lists[listindex].cards[cardindex].addedMembers.indexOf(emp);

    this.boards.lists[listindex].cards[cardindex].addedMembers[empindex].estimateHrs = hrs;
    this.boards.lists[listindex].cards[cardindex].addedMembers[empindex].estimateMin = min;
    this.calToralEstTime(list, card);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  editOrgTime(hrs, min, list, card, emp) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    var empindex = this.boards.lists[listindex].cards[cardindex].addedMembers.indexOf(emp);

    this.boards.lists[listindex].cards[cardindex].addedMembers[empindex].originalHrs = hrs;
    this.boards.lists[listindex].cards[cardindex].addedMembers[empindex].originalMin = min;
    this.calToralOrgTime(list, card);
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  calToralEstTime(list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].estimateMin = 0;
    this.boards.lists[listindex].cards[cardindex].estimateHrs = 0;
    for (let i = 0; i < this.boards.lists[listindex].cards[cardindex].addedMembers.length; i++) {

      if (this.boards.lists[listindex].cards[cardindex].addedMembers[i].estimateHrs != undefined) {
        this.boards.lists[listindex].cards[cardindex].estimateHrs = Number(this.boards.lists[listindex].cards[cardindex].estimateHrs) + Number(this.boards.lists[listindex].cards[cardindex].addedMembers[i].estimateHrs);
      }
      if (this.boards.lists[listindex].cards[cardindex].addedMembers[i].estimateMin != undefined) {
        this.boards.lists[listindex].cards[cardindex].estimateMin = Number(this.boards.lists[listindex].cards[cardindex].estimateMin) + Number(this.boards.lists[listindex].cards[cardindex].addedMembers[i].estimateMin);
      }
    }
    var hours = 0, minutes = 0;
    hours = Math.floor(this.boards.lists[listindex].cards[cardindex].estimateMin / 60);
    minutes = this.boards.lists[listindex].cards[cardindex].estimateMin % 60;
    this.boards.lists[listindex].cards[cardindex].estimateHrs = this.boards.lists[listindex].cards[cardindex].estimateHrs + hours;
    this.boards.lists[listindex].cards[cardindex].estimateMin = minutes;
    this.calculateEstimateTime();
    this.calculatesCardsCount();

  }
  calToralOrgTime(list, card) {
    var listindex = this.boards.lists.indexOf(list);
    var cardindex = this.boards.lists[listindex].cards.indexOf(card);
    this.boards.lists[listindex].cards[cardindex].originalHrs = 0;
    this.boards.lists[listindex].cards[cardindex].originalMin = 0;
    for (let i = 0; i < this.boards.lists[listindex].cards[cardindex].addedMembers.length; i++) {

      if (this.boards.lists[listindex].cards[cardindex].addedMembers[i].originalHrs != undefined) {
        this.boards.lists[listindex].cards[cardindex].originalHrs = Number(this.boards.lists[listindex].cards[cardindex].originalHrs) + Number(this.boards.lists[listindex].cards[cardindex].addedMembers[i].originalHrs);
      }
      if (this.boards.lists[listindex].cards[cardindex].addedMembers[i].originalMin != undefined) {
        this.boards.lists[listindex].cards[cardindex].originalMin = Number(this.boards.lists[listindex].cards[cardindex].originalMin) + Number(this.boards.lists[listindex].cards[cardindex].addedMembers[i].originalMin);
      }
    }
    var hours = 0, minutes = 0;
    hours = Math.floor(this.boards.lists[listindex].cards[cardindex].originalMin / 60);
    minutes = this.boards.lists[listindex].cards[cardindex].originalMin % 60;
    this.boards.lists[listindex].cards[cardindex].originalHrs = this.boards.lists[listindex].cards[cardindex].originalHrs + hours;
    this.boards.lists[listindex].cards[cardindex].originalMin = minutes;

    this.calculateOriginalTime();
    this.calculatesCardsCount();
  }
  calculateMytime() {
    if (this.boards.invetedMembers != undefined) {
      for (let myindex = 0; myindex < this.boards.invetedMembers.length; myindex++) {
        this.boards.invetedMembers[myindex].estimateHrs = 0;
        this.boards.invetedMembers[myindex].estimateMin = 0;
        this.boards.invetedMembers[myindex].originalHrs = 0;
        this.boards.invetedMembers[myindex].originalMin = 0;
        for (let i = 0; i < this.boards.lists.length; i++) {
          for (let j = 0; j < this.boards.lists[i].cards.length; j++) {
            if (this.boards.lists[i].cards[j].addedMembers != undefined) {
              for (let k = 0; k < this.boards.lists[i].cards[j].addedMembers.length; k++) {
                if (this.boards.invetedMembers[myindex].id == this.boards.lists[i].cards[j].addedMembers[k].id) {
                  if (this.boards.lists[i].cards[j].addedMembers[k].estimateHrs == undefined) {
                    this.boards.lists[i].cards[j].addedMembers[k].estimateHrs = 0;
                  }
                  if (this.boards.lists[i].cards[j].addedMembers[k].estimateMin == undefined) {
                    this.boards.lists[i].cards[j].addedMembers[k].estimateMin = 0;
                  }
                  if (this.boards.lists[i].cards[j].addedMembers[k].originalHrs == undefined) {
                    this.boards.lists[i].cards[j].addedMembers[k].originalHrs = 0;
                  }
                  if (this.boards.lists[i].cards[j].addedMembers[k].originalMin == undefined) {
                    this.boards.lists[i].cards[j].addedMembers[k].originalMin = 0;
                  }
                  this.boards.invetedMembers[myindex].estimateHrs = Number(this.boards.invetedMembers[myindex].estimateHrs) + Number(this.boards.lists[i].cards[j].addedMembers[k].estimateHrs);
                  this.boards.invetedMembers[myindex].estimateMin = Number(this.boards.invetedMembers[myindex].estimateMin) + Number(this.boards.lists[i].cards[j].addedMembers[k].estimateMin);
                  this.boards.invetedMembers[myindex].originalHrs = Number(this.boards.invetedMembers[myindex].originalHrs) + Number(this.boards.lists[i].cards[j].addedMembers[k].originalHrs);
                  this.boards.invetedMembers[myindex].originalMin = Number(this.boards.invetedMembers[myindex].originalMin) + Number(this.boards.lists[i].cards[j].addedMembers[k].originalMin);
                }
              }
              var hours = 0, minutes = 0, hours1 = 0, minutes1 = 0;
              hours = Math.floor(this.boards.invetedMembers[myindex].estimateMin / 60);
              minutes = this.boards.invetedMembers[myindex].estimateMin % 60;
              hours1 = Math.floor(this.boards.invetedMembers[myindex].originalMin / 60);
              minutes1 = this.boards.invetedMembers[myindex].originalMin % 60;
              this.boards.invetedMembers[myindex].estimateHrs = this.boards.invetedMembers[myindex].estimateHrs + hours;
              this.boards.invetedMembers[myindex].estimateMin = minutes;
              this.boards.invetedMembers[myindex].originalHrs = this.boards.invetedMembers[myindex].originalHrs + hours1;
              this.boards.invetedMembers[myindex].originalMin = minutes1;
            }
          }
        }
      }
    }
  }
  editCapacity(value, emp) {
    var index = this.boards.invetedMembers.indexOf(emp);
    this.boards.invetedMembers[index].CapacityHrs = value;
    this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
    });
  }
  MovecardsToboard() {

    if (this.SelectedBoard.Json == undefined) {
      this.toastr.error('Please select the board!', 'Failed!');
    }
    else {
      var boardjson = jQuery.parseJSON(this.SelectedBoard.Json);
      for (let i = 0; i < this.boards.lists.length; i++) {
        for (let j = 0; j < this.boards.lists[i].cards.length; j++) {
          if (this.boards.lists[i].cards[j].selectedTomove == true) {
            this.boards.lists[i].cards[j].selectedTomove = false;
            boardjson.lists[0].cards.push(this.boards.lists[i].cards[j]);
            this.boards.lists[i].cards.splice(j, 1);
          }
        }
        if (i == this.boards.lists.length - 1) {
          // boardjson.invetedMembers=[];
          // this.boards.invetedMembers.forEach((item) => {
          //   boardjson.invetedMembers.push({ "id": item.id, "itemName": item.itemName })

          // })
          this.calculateEstimateTime();
          this.calculateOriginalTime();
          this.calculatesCardsCount();
          this.userservice.updateboard(this.CompanyProjectBoardId, this.CompanyId, this.ProjectId, this.SubProjectId, this.boards.BoardName, this.boards).subscribe(result => {
          });
          this.userservice.updateboard(this.SelectedBoard.CompanyProjectBoardId, this.SelectedBoard.CompanyId, this.SelectedBoard.ProjectId, this.SelectedBoard.SubProjectId, this.SelectedBoard.BoardName, boardjson).subscribe(result => {
          });
          this.toastr.success('Cards moved successfully!', 'Success!');
        }
      }
    }
  }
}
