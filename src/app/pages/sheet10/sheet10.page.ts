import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet10',
  templateUrl: './sheet10.page.html',
  styleUrls: ['./sheet10.page.scss'],
})
export class Sheet10Page implements OnInit {
  addedToFavourite: boolean=false;
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
