// this is the main component that will be rendered to the index.html page
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
