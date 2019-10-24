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
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  imageStore: any = [];
  selectedImage: any;


  constructor(private http: ServerBaseService, private https: HttpClient) { }

  ngOnInit() {
    this.getProducts();
    this.getProductImages(3);
  }

  getProducts(){
    this.http.getData('products').subscribe(
    response => {
      console.log('response', response);
    },
    err => {
      console.log('err', err.error.error.message);
    })

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
    this.selectedImage = this.imageStore[0];
  }

  setSrc(img){
    this.selectedImage = {
      src : img.src,
      id : img.id
    };
  }



}
