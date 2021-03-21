import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Scrollbar,
  A11y,
  Navigation,
  Autoplay
} from "swiper/core";
// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar,Navigation, A11y]);

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  sponsors=[
'',


];
  constructor() {
    this.sponsors = Array.from({ length: 10 }).map(
      (el, index) => `sponsors ${index + 1}`
    );
  }


  onSwiper(swiper) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {
  }

}
