import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/foods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];
  // to be used where the private is below - foodService = new FoodService()
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    let foodsObservable:Observable<Food[]>
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
      foodsObservable = this.foodService.getAllFoodsBySearchTerms(params.searchTerm)
      else if (params.tag)
      foodsObservable= this.foodService.getAllFoodsByTag(params.tag);
      else
      foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serverFoods)=>{
        this.foods = serverFoods
      })
    })


    // this.foods = foodService.getAll();
  }

  ngOnInit(): void {

  }
}
