import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Observable,of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';


export interface Tile {
  title: string;
  cols: number;
  rows: number;
  text: Array<{'subtext';'img';'type'}>;
  //img: string;
  //type: string;
}



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
})
export class ProductComponent implements OnInit {
  routeId?: number; //= new Subject() // idea - check which number of id and then create new Tiles with appropriate values

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.snapshot.params["id"]// == 1
      //this.product = new Product(add here new parameters from current product)
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



  tiles: Tile[] = [
    {
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
}
