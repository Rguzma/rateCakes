import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CakesService } from './cakes.service';
import { AppComponent } from './app.component';
import { CakesComponent } from './cakes/cakes.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CakeDetailsComponent } from './cake-details/cake-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CakesComponent,
    CakeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CakesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
