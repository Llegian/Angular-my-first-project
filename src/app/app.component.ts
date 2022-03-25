import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  serverCreationStatus = "no server was created";
  hide = true;
  useDefault = false;
  message = "Night mode off";

  onCreateServer() {
    this.serverCreationStatus = "server was created";
  }

  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    if (this.useDefault==false)
    this.message="Night mode off"
    else
    this.message="Night mode on" 
  }

}

export class BackgroundimageComponent {  
  constructor() { }   
} 

  


