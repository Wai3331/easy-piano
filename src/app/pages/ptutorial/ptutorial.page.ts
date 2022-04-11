import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ptutorial',
  templateUrl: './ptutorial.page.html',
  styleUrls: ['./ptutorial.page.scss'],
})
export class PtutorialPage implements OnInit{
  title;
  articles;
  segId='Articles';
  constructor() { }

  ngOnInit() {
    this.articles=[{
      img:'assets/piano1.jpg',
      name: 'Piano for Complete Beginners: 5 tips to get you started',
      link:'/p-article1',
      status: false,
    },
    {
      img:'assets/piano2.jpg',
      name: 'The 8 first & easiest songs you should learn on piano',
      link:'/p-article2',
      status: true,
    },
    {
      img:'assets/piano3.jpg',
      name: 'Learning how to play the piano: The basics in 13 steps',
      link:'/p-article3',
      status: false,
    },
    {
      img:'assets/piano4.jpg',
      name: "How to Play Piano – The Ultimate Guide",
      link:'/p-article4',
      status: false,
    },
    {
      img:'assets/piano5.jpg',
      name: 'Piano Tutorial For Complete Beginners',
      link:'/p-article5',
      status: false,
    },
    {
      img:'assets/piano6.jpg',
      name: 'PIANO CHORDS FOR BEGINNERS',
      link:'/p-article6',
      status: false,
    },
    {
      img:'assets/piano7.png',
      name: 'How to Play a Keyboard for Beginners: Step by Step Tutorial',
      link:'/p-article7',
      status: false,
    },
  ]
  }

  segmentChanged(eve){
    this.segId=eve.details.value;
  }
  handleAddToFavourite(){
    this.articles.status = true;
  }

  handleRemoveFromFavourite(){
    this.articles.status = false;
  }
}