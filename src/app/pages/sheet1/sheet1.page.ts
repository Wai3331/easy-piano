import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet1',
  templateUrl: './sheet1.page.html',
  styleUrls: ['./sheet1.page.scss'],
})
export class Sheet1Page implements OnInit {
  addedToFavourite: boolean = true;
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
