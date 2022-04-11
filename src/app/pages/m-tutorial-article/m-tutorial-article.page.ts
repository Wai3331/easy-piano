import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-m-tutorial-article',
  templateUrl: './m-tutorial-article.page.html',
  styleUrls: ['./m-tutorial-article.page.scss'],
})
export class MTutorialArticlePage implements OnInit {
  title;
  articles;
  segId='Articles';
  categories: Category []=[];
  addedToFavourite: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getCategories();
    this.articles=[{
      img:'assets/readSheet.jpg',
      name: 'How To Read Sheet Music: A Step-by-Step Guide',
      link:'/m-article1',
      status: true,
    },
    {
      img:'assets/readSheet.jpg',
      name: 'How to read Sheet Music (For Beginner)',
      link:'/m-article2',
      status: false,
    },
    {
      img:'assets/sheet2.jpg',
      name: 'Learn to read music from scratch',
      link:'/m-article3',
      status: false,
    },
    {
      img:'assets/readMusic.jpg',
      name: "How to Read Music Made Easy | Beginner's Guide",
      link:'/m-article4',
      status: false,
    },
    {
      img:'assets/musicTheory.jpg',
      name: 'BASIC MUSIC THEORY FOR BEGINNERS – THE COMPLETE GUIDE',
      link:'/m-article5',
      status: true,
    },
    {
      img:'assets/Learn-Music-as-Adults.jpg',
      name: '10 Tips for Learning Music as an Adult',
      link:'/m-article6',
      status: false,
    },
    {
      img:'assets/musicBeginner.jpg',
      name: 'Music Theory For Beginners: The 10 Step System For Rapid Progress',
      link:'/m-article7',
      status: false,
    },
  ]
  }

  segmentChanged(eve){
    this.segId=eve.details.value;
  }

  getCategories(){
    this.categories=[
      {
        id:1,
        label: 'Article',
        image: 'assets/article.png',
        active:true,
      },
      {
        id:2,
        label: 'Video',
        image: 'assets/video.png',
        active:false,
      },
    ]
  }
  handleAddToFavourite(){
    this.articles.status = true;
  }

  handleRemoveFromFavourite(){
    this.articles.status = false;
  }
}
