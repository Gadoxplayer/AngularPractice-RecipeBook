import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetIngredients() {
    const ingredName = this.nameInputRef.nativeElement.value;
    const ingreAmount = this.amountInputRef.nativeElement.value;
    const newIgredient = new Ingredient(ingredName, ingreAmount);

    this.ingredientAdded.emit(newIgredient);
  }
  

}
