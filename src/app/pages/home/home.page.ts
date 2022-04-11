import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  functions;

  constructor(private router: Router) { }

  ngOnInit() {
    this.functions=[
      
      {
        img: 'assets/lecture.png',
        name:'Tutorials'
      },
      {
        img: 'assets/lecture.png',
        name:'Tutorials2'
      },
      {
        img: 'assets/lecture.png',
        name:'Library'
      },
      {
        img: 'assets/lecture.png',
        name:'Favourite'
      },
      {
        img: 'assets/lecture.png',
        name:'Piano'
      },
      {
        img: 'assets/lecture.png',
        name:'Scoring'
      },
    ]
  }

  goToFunction(){

  }
}
