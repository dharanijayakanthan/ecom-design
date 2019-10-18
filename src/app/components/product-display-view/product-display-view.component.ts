import { Component, OnInit ,   ViewEncapsulation
} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import {ServerBaseService} from '../../service/server-base';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-display-view',
  templateUrl: './product-display-view.component.html',
  styleUrls: ['./product-display-view.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ProductDisplayViewComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };

  imageStore : any = [];

  constructor(private http: ServerBaseService, private https: HttpClient) { }

  ngOnInit() {
    this.getProducts();
    this.getProductImages(8);
    console.log('this.customOptions', this.customOptions)
  }

  getProducts(){
    this.http.getData('products').subscribe(
    response => {
      console.log('response', response)
    },
    err => {
      console.log('err', err.error.error.message)
    }
    )

  }

  getProductImages(id){
    this.http.getData(`products/${id}/image`).subscribe(
      response => {
        console.log('response', response);
        this.createImageStore(response);
      },
      err => {
        console.log('err', err.error.error.message)
      })
  }

  createImageStore(response){
    response.forEach(element => {
      let obj= {
        src : '',
        id:''
      };
      obj.src = element.url;
      obj.id = element.id;
      this.imageStore.push(obj);
    });
  }



}
