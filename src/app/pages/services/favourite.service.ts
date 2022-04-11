import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  title;
  articles;
  addedToFavourite: boolean = true;
  addedToFavourite1: boolean = true;
  addedToFavourite2: boolean = true;
  addedToFavourite3: boolean = true;
  showing1: boolean = true;
  constructor() { }

  handleAddToFavourite(){
    this.addedToFavourite = true;
  }

  handleRemoveFromFavourite(){
    this.addedToFavourite = false;
    this.showing1 = false;
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
