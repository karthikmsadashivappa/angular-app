import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipes-list/recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test",
      "sample text",
      "https://cdn-image.myrecipes.com/sites/default/files/fresh-fig-galette-ck.jpg"
    ),
    new Recipe(
      "A Test",
      "sample text",
      "https://cdn-image.myrecipes.com/sites/default/files/fresh-fig-galette-ck.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}
