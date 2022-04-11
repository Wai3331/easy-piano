import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet9',
  templateUrl: './sheet9.page.html',
  styleUrls: ['./sheet9.page.scss'],
})
export class Sheet9Page implements OnInit {
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
