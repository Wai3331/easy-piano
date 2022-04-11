import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../services/favourite.service';

@Component({
  selector: 'app-ptutorial-video',
  templateUrl: './ptutorial-video.page.html',
  styleUrls: ['./ptutorial-video.page.scss'],
})
export class PtutorialVideoPage implements OnInit {
  addedToFavourite: boolean = true;
  addedToFavourite1: boolean = true;
  addedToFavourite2: boolean = false;
  addedToFavourite3: boolean = false;
  constructor(public favouriteService: FavouriteService) { }

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
