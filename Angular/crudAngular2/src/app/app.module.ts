import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { CrudService } from './crud.service';
const appRoutes:Routes= [
  {
    path:'crud',
    component:CrudComponent
  },
  {
    path:'',
    component:AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
  
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
