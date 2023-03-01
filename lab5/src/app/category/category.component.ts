import { Component } from '@angular/core';

import { category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category = category; 
  currentcat : string | undefined;

  Selected(category: string){
    this.currentcat = category;
  }

}
