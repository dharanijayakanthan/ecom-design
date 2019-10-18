import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-display-customize',
  templateUrl: './product-display-customize.component.html',
  styleUrls: ['./product-display-customize.component.scss']
})
export class ProductDisplayCustomizeComponent implements OnInit {
  gender : any = 'male';
  productColors: any = [];
  constructor() {
    this.productColors = [
      "#f7f7f7",
      "#072348",
      "#000000",
      "#b5222e",
      "#ffcf60",
      "#4e4e4e",
      "#129f7d",
      "#c69f97",
      "#215297",
      "#b3926e",
      "#4e4e4e"

    ]

  }

  ngOnInit() {
  }

}
