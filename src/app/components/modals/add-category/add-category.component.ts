import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ICategoryView} from "../../../DTO/Category/ICategoryView";
import {MenuCategories} from "../../../DTO/enums/menuCategories";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnInit {

  menus = [MenuCategories.MainCategory, MenuCategories.Category, MenuCategories.SubCategory];
  @Input() categories: ICategoryView[] = [];
  @Input() chooseMenuItem = 'Выберите тип добавляемого объекта';
  @Input() category: ICategoryView|undefined = undefined;
  categoryForm: FormGroup = this._builder.group({
    mainCategory: new FormControl(),
    category: new FormControl(),
    subCategory: new FormControl()
  });

  constructor(private modalService: NgbModal,
              public activeModal: NgbActiveModal,
              private _builder: FormBuilder,
              private _category: CategoryService) {

  }

  ngOnInit(): void {
    if (this.category){
      this.categoryForm = this._builder.group({
        mainCategory: this.category.mainCategory,
        category: this.category.category,
        subCategory: new FormControl()
      });
    }
  }


  chooseMenu(menu: MenuCategories) {
      this.chooseMenuItem = menu;
  }

  getMainCategories() {
    return new Set(this.categories.map(_ => _.mainCategory));
  }

  onSubmit() {
      const data = this.categoryForm.getRawValue();
      let param = 0;
      switch (this.chooseMenuItem) {
        case MenuCategories.Category: {
          param = 1;
          break;
        }
        case MenuCategories.SubCategory: {
          param = 2;
          break;
        }
      }
      this._category.saveCategory(data as ICategoryView, param.toString()).subscribe(
        result => {
          if (result !== 0){
            Swal.fire(
              'Good job!',
              'Категория добавлена',
              'success'
            );
            this.activeModal.close();
          }
        }
      );
  }

  changeMainCategory($event: Event) {
    // this.categoryForm.patchValue({category: 'Выберите'})
  }

  getCategories() {
    const data = this.categoryForm.getRawValue();
    const category = data['mainCategory'];
    if (category != null) {
      return new Set(this.categories
        .filter(_ => _.mainCategory === category)
        .map(_ => _.category));
    } else {
      return new Set(['Выберите Рубрику']);
    }
  }

  changeCategory($event: Event) {

  }
}
