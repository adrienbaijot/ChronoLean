import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdSelectModule, MdOptionModule, MdSliderModule, MdInputModule, MdButtonModule, MdToolbarModule} from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChronoTaskComponent } from './chrono-task/chrono-task.component';
import { ChronoOverlayComponent } from './chrono-overlay/chrono-overlay.component';
import {ChronoTaskService} from 'app/chrono-task-service.service'


@NgModule({
  declarations: [
    AppComponent,
    ChronoTaskComponent,
    ChronoOverlayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    MdSelectModule, MdOptionModule, MdSliderModule, MdInputModule, MdButtonModule, MdToolbarModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [ChronoTaskService],
  bootstrap: [AppComponent],
})
export class AppModule { }
