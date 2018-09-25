import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { UploadDownloadComponent } from './upload-download/upload-download.component';
import { HttpModule   } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    UploadDownloadComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
