import { Component, OnInit } from '@angular/core';
import { StartCategories } from '../../models/start-categories';



// export interface List {
//   title: string;
//   img: string;
//   description: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  
})
export class HomeComponent implements OnInit {


  breakpoint?: number // grrid sizes

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 580) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 580) ? 1 : 3;
  }

list: StartCategories[] = [
  { id: 1, title: 'name', img: 'https://www.showdowndisplays.com/cdn/StaticMisc/BuildYourOwn_Banners.jpg', description: 'Build a banner to meet your needs - indoor or outdoor, single- or double-sided!' },
  { id: 2, title: 'flags', img: 'https://www.showdowndisplays.com/cdn/StaticMisc/BuildYourOwn_Flags.jpg', description: 'Tailor a flag that fits all of your needs. From custom sizes to finishing styles, we’ve got everything you need.' },
  { id: 3, title: 'segs', img: 'https://www.showdowndisplays.com/cdn/StaticMisc/BuildYourOwn_SEGs.jpg', description: 'Customize with Xarisma™ Silicone Edge Graphic Displays, offering custom creations for every space and style.' }
]

}
