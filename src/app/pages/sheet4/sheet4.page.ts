import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet4',
  templateUrl: './sheet4.page.html',
  styleUrls: ['./sheet4.page.scss'],
})
export class Sheet4Page implements OnInit {
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
