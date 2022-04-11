import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  title;
  articles;
  segId='Articles';
  addedToFavourite: boolean = true;
  addedToFavourite1: boolean = true;
  addedToFavourite2: boolean = true;
  addedToFavourite3: boolean = true;
  addedToFavourite4: boolean = true;
  addedToFavourite5: boolean = true;
  showing1: boolean = true;
  constructor() { }

  ngOnInit() {    this.articles=[
  {
    img:'assets/piano2.jpg',
    name: 'The 8 first & easiest songs you should learn on piano',
    link:'/p-article2',
    status: true,
  },
  {
    img:'assets/readSheet.jpg',
    name: 'How To Read Sheet Music: A Step-by-Step Guide',
    link:'/m-article1',
    status: true,
  },
  {
    img:'assets/musicTheory.jpg',
    name: 'BASIC MUSIC THEORY FOR BEGINNERS – THE COMPLETE GUIDE',
    link:'/m-article5',
    status: true,
  },
]
  }
  handleAddToFavourite(){
    this.addedToFavourite = true;
  }

  handleRemoveFromFavourite(){
    this.addedToFavourite = false;
    this.showing1 = false;
  }

  handleAddToFavourite1(){
    this.addedToFavourite1 = true;
  }

  handleRemoveFromFavourite1(){
    this.addedToFavourite1 = false;
  }

  handleAddToFavourite2(){
    this.addedToFavourite2 = true;
  }

  handleRemoveFromFavourite2(){
    this.addedToFavourite2 = false;
  }

  handleAddToFavourite3(){
    this.addedToFavourite3 = true;
  }

  handleRemoveFromFavourite3(){
    this.addedToFavourite3 = false;
  }
  handleAddToFavourite4(){
    this.addedToFavourite4 = true;
  }

  handleRemoveFromFavourite4(){
    this.addedToFavourite4 = false;
  }
  handleAddToFavourite5(){
    this.addedToFavourite5 = true;
  }

  handleRemoveFromFavourite5(){
    this.addedToFavourite5 = false;
  }
}
