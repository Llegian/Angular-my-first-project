import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider' ;
import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule} from '@angular/material/icon';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatIconModule,
  

  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}





