import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet8',
  templateUrl: './sheet8.page.html',
  styleUrls: ['./sheet8.page.scss'],
})
export class Sheet8Page implements OnInit {
  addedToFavourite: boolean=true;
  constructor() { }

  ngOnInit() {
  }
  handleAddToFavourite(){
    this.addedToFavourite = true;
  }

  handleRemoveFromFavourite(){
    this.addedToFavourite = false;
  }
}
