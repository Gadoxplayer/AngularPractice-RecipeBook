import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onSetIngredients() {
    const ingredName = this.nameInputRef.nativeElement.value;
    const ingreAmount = this.amountInputRef.nativeElement.value;
    const newIgredient = new Ingredient(ingredName, ingreAmount);
    this.slService.addIngredient(newIgredient);
  }
  

}
