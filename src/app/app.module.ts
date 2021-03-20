import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegistationService} from './registation.service';
import { TodoComponent } from './todo/todo.component';
import { ReversepipePipe } from './reversepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TodoComponent,
    ReversepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegistationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
