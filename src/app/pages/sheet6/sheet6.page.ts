import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet6',
  templateUrl: './sheet6.page.html',
  styleUrls: ['./sheet6.page.scss'],
})
export class Sheet6Page implements OnInit {
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
