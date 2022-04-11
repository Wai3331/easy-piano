import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet2',
  templateUrl: './sheet2.page.html',
  styleUrls: ['./sheet2.page.scss'],
})
export class Sheet2Page implements OnInit {
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
