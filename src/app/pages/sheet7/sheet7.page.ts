import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet7',
  templateUrl: './sheet7.page.html',
  styleUrls: ['./sheet7.page.scss'],
})
export class Sheet7Page implements OnInit {
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
