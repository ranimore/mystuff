import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KanbanboardComponent } from './kanbanboard/kanbanboard.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FocusDirective } from './focus.directive';
import { AutofocusModule } from 'angular-autofocus-fix';
import {AutosizeModule} from 'angular2-autosize';
import { KanbantreeViewComponent } from './kanbantree-view/kanbantree-view.component';
//import { AngularDraggableModule } from 'angular2-draggable';
import {ProgressBarModule} from "ng2-progress-bar";
import { jqxTreeGridComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxtreegrid';
import { jqxButtonComponent } from 'jqwidgets-framework/jqwidgets-ts/angular_jqxbuttons';
import { DaterangepickerModule } from 'angular-2-daterangepicker';
const appRoutes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '**', component: KanbanboardComponent,
    },
    {
      path:'tree',component:KanbantreeViewComponent
    }

  ]
}]

@NgModule({
  declarations: [
    AppComponent,
    KanbanboardComponent,
    KanbantreeViewComponent,
     FocusDirective,
     jqxTreeGridComponent,
     jqxButtonComponent
  ],
  imports: [
    BrowserModule,
    AngularMultiSelectModule,
    DaterangepickerModule,
    AutofocusModule,
    AutosizeModule,
    HttpModule,
    FormsModule,
    //AngularDraggableModule,
    ProgressBarModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
