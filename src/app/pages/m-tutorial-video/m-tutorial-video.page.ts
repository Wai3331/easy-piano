import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-tutorial-video',
  templateUrl: './m-tutorial-video.page.html',
  styleUrls: ['./m-tutorial-video.page.scss'],
})
export class MTutorialVideoPage implements OnInit {

  addedToFavourite: boolean = true;
  addedToFavourite1: boolean = false;
  addedToFavourite2: boolean = false;
  addedToFavourite3: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  handleAddToFavourite(){
    this.addedToFavourite = true;
  }

  handleRemoveFromFavourite(){
    this.addedToFavourite = false;
  }

  handleAddToFavourite1(){
    this.addedToFavourite1 = true;
  }

  handleRemoveFromFavourite1(){
    this.addedToFavourite1 = false;
  }

  handleAddToFavourite2(){
    this.addedToFavourite2 = true;
  }

  handleRemoveFromFavourite2(){
    this.addedToFavourite2 = false;
  }

  handleAddToFavourite3(){
    this.addedToFavourite3 = true;
  }

  handleRemoveFromFavourite3(){
    this.addedToFavourite3 = false;
  }
}
