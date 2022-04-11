import { Component, Input } from '@angular/core';
import { Category2 } from 'src/app/models/category2.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {
@Input() item: Category2;

}
