import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet11',
  templateUrl: './sheet11.page.html',
  styleUrls: ['./sheet11.page.scss'],
})
export class Sheet11Page implements OnInit {
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
