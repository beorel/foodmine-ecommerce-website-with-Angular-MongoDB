import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tags';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    })
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

function ngOnInit() {
    throw new Error('Function not implemented.');
  }

