import { Component, OnInit } from '@angular/core';
import { Category2 } from 'src/app/models/category2.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  categories: Category2 []=[];
  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  
  getCategories(){
    this.categories=[
      {
        id:1,
        label: 'All',
        image: 'assets/show-all-icon-6.jpg',
        active:true,
        link:'/library',
      },
      {
        id:2,
        label: 'Classic',
        image: 'assets/classical2.png',
        active:false,
        link:'/library-classical',
      },
      {
        id:3,
        label: 'Pop',
        image: 'assets/Pop-Music-Logo-Transparent.png',
        active:false,
        link:'/library-pop',
      },
    ]
  }
}
