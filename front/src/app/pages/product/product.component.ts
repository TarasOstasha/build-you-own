import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import {Observable,of, from } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


import { ProductItem } from 'src/app/models/product-item';
import { MatRadioChange } from '@angular/material/radio';


export interface Tile {
  id: number;
  title: string;
  cols: number;
  rows: number;
  text: Array<{ 'subtext': string; 'img': string; 'type': string }>;
  //img: string;
  //type: string;
}



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
  checked = false;
  //indeterminate = false;
  labelPosition?: string; //'before' | 'after' = 'after';
  @ViewChild('input', {static: false}) input: ElementRef;
  //isabled = false;
  routeId?: number; //= new Subject() // idea - check which number of id and then create new Tiles with appropriate values

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.snapshot.params["id"] // == 1
      // this.product = new Product(add here new parameters from current product)
  }


  

  ngOnInit() {
    this._activatedRoute.params.subscribe( // you always almost need to unsubscribe when the component is getting destroyed but here you don't need to ngOnDestroy unsubscribe because the router destroys the subscribe whenever its no longer needed
      (params: Params) => {
        this.routeId = +params["id"];
        console.log(typeof this.routeId);
      }
    );
    //console.log(this._activatedRoute.snapshot.params["id"])
  }

  ngAfterViewInit() {
 
  }

  
  

  onItemChange(event: MatRadioChange): void {
    this.$filteredProducts = [];
    const val = event.value;
    from(this.products).pipe(
      //debounceTime(700),
      filter(item => item.type == val),
      distinctUntilChanged(),
      tap(item => this.$filteredProducts.push(item))
    ).subscribe({
      next: console.log
    });
    console.log(this.$filteredProducts)
    
  }

  ngOndestroy() {
    //this.$filteredProducts.unsubscribe()
  }

  filterProd(tile: Tile) {
    console.log(tile)
  }

  

  tiles: Tile[] = [
    {
      id: 1,
      title: 'Single-Sided or Double-Sided?',
      cols: 1,
      rows: 1,
      text: [
        {
          subtext:
            'Single-sided vinyl banners have a front correct image with a white back. Single-sided fabric banners have a front correct image with a reversed image on the back.',
          img: 'https://www.showdowndisplays.com/cdn/StaticMisc/CustomProducts/SS_banner_Icon.jpg',
          type: 'Single-Sided',
        },
        {
          subtext:
            'Double-sided banners show the correct facing image on both sides.',
          img: 'https://www.showdowndisplays.com/cdn/StaticMisc/CustomProducts/DS_banner_Icon.jpg',
          type: 'Double-Sided',
        }
      ],
    },
    {
      id: 1,
      title: 'Indoor or Outdoor?',
      cols: 1,
      rows: 1,
      text: [
        {
          subtext:
            'These are our recommended materials for indoor and outdoor usage. All banner material can be used in both situations but may not be covered by warranty if not recommended.',
          img: 'https://www.showdowndisplays.com/cdn/StaticMisc/CustomProducts/indoor_banner.jpg',
          type: 'Indoor',
        },
        {
          subtext:
            '',
          img: 'https://www.showdowndisplays.com/cdn/StaticMisc/CustomProducts/outdoor_banner3.jpg',
          type: 'Outdoor',
        }
      ],
    },
    {
      id: 1,
      title: 'What kind of material?',
      cols: 1,
      rows: 1,
      text: [
        {
          subtext:
            'BANNER MATERIAL COMPARISON CHART',
          img: 'https://www.showdowndisplays.com/cdn/StaticMisc/CustomProducts/Vinyl.png',
          type: 'Vinyl',
        },
        {
          subtext:
            'Double-sided banners show the correct facing image on both sides.',
          img: 'https://www.showdowndisplays.com/cdn/StaticMisc/CustomProducts/Fabric.png',
          type: 'Fabric',
        }
      ],
    },
    // {title: 'Indoor or Outdoor?', cols: 1, rows: 1, text: 'lightgreen'},
    // {title: 'What kind of material?', cols: 1, rows: 1, text: 'lightpink'},
    // {title: 'Four', cols: 3, rows: 1, text: '#DDBDF1'},
  ];

  products: ProductItem[] = [
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280580_0_Preview.jpg',
      title: 'Custom 9 oz Mesh Vinyl Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280582_0_Preview.jpg',
      title: 'Custom 13 oz Vinyl Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280581_0_Preview.jpg',
      title: 'Custom 10 oz Vinyl Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280587_0_Preview.jpg',
      title: 'Custom Satin Fabric Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280588_0_Preview.jpg',
      title: 'Custom Nylon Fabric Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280586_0_Preview.jpg',
      title: 'Custom Super Poly Knit Fabric Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/Product/Select?Sku=280583&returnUrl=%2Fproduct%2Fcustombanners',
      title: 'Custom 13 oz Smooth Vinyl Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280585_0_Preview.jpg',
      title: 'Custom Poly-Poplin Fabric Single-Sided',
      type: 'Single-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280584_0_Preview.jpg',
      title: 'Custom 18 oz Vinyl Single-Sided',
      type: 'Single-Sided'
    },
    //
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280580_0_Preview.jpg',
      title: 'Custom 9 oz Mesh Vinyl Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280582_0_Preview.jpg',
      title: 'Custom 13 oz Vinyl Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280581_0_Preview.jpg',
      title: 'Custom 10 oz Vinyl Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280587_0_Preview.jpg',
      title: 'Custom Satin Fabric Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280588_0_Preview.jpg',
      title: 'Custom Nylon Fabric Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280586_0_Preview.jpg',
      title: 'Custom Super Poly Knit Fabric Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280583_0_Preview.jpg',
      title: 'Custom 13 oz Smooth Vinyl Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280585_0_Preview.jpg',
      title: 'Custom Poly-Poplin Fabric Double-Sided',
      type: 'Double-Sided'
    },
    {
      id: 1,
      img: 'https://www.showdowndisplays.com/cdn/Resources/Primary/280584_0_Preview.jpg',
      title: 'Custom 18 oz Vinyl Double-Sided',
      type: 'Double-Sided'
    }
  ]
  $filteredProducts: ProductItem[] = this.products;
  
}
