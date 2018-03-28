import { Component, OnInit } from '@angular/core';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

    dishes: Dish[] = DISHES;

    selectedDish = this.dishes[0];

    constructor() { }

    ngOnInit() {
    }

    onSelect(dish: Dish) {
        this.selectedDish = dish;
    }

}
