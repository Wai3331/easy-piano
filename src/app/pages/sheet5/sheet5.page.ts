import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet5',
  templateUrl: './sheet5.page.html',
  styleUrls: ['./sheet5.page.scss'],
})
export class Sheet5Page implements OnInit {
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
