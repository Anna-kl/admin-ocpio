import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ICategoryView} from "../../DTO/Category/ICategoryView";
import {AddCategoryComponent} from "../../components/modals/add-category/add-category.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MenuCategories} from "../../DTO/enums/menuCategories";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})


export class CategoryComponent implements OnInit {
  categories: ICategoryView[] = [];
  public items: { field: string }[] = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' }
  ];
  private token: string|undefined = undefined;

  constructor(private _category: CategoryService,
              private modalService: NgbModal,
              private _route: ActivatedRoute) {
    this.token = this._route.snapshot.params['token'];
  }

  ngOnInit(): void {
    this._category.getAllCategory(this.token!).subscribe(
      result => {
        this.categories = result as ICategoryView[];
      }
    );
  }

  addCategory() {
    const modalRef = this.modalService.open(AddCategoryComponent);
    modalRef.componentInstance.categories = this.categories;
    modalRef.componentInstance.token = this.token;
  }

  updateCategory(category: ICategoryView) {
    const modalRef = this.modalService.open(AddCategoryComponent);
    modalRef.componentInstance.categories = this.categories;
    modalRef.componentInstance.chooseMenuItem = MenuCategories.SubCategory;
    modalRef.componentInstance.category = category;
  }
}
