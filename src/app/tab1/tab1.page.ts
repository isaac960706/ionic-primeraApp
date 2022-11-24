import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor() {}

  ngOnInit() {
    let num = 100;
    // debugger;

    num = 20;

    num = num * 5;

    num = 1;

    console.log("num: ", num);


  }
}
