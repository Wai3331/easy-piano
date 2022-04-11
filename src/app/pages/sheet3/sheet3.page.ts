import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet3',
  templateUrl: './sheet3.page.html',
  styleUrls: ['./sheet3.page.scss'],
})
export class Sheet3Page implements OnInit {
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
