import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet12',
  templateUrl: './sheet12.page.html',
  styleUrls: ['./sheet12.page.scss'],
})
export class Sheet12Page implements OnInit {
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
