import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {

  }

}
