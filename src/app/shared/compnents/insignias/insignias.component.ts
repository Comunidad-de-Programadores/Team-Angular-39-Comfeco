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
  selector: 'app-insignias',
  templateUrl: './insignias.component.html',
  styleUrls: ['./insignias.component.css']
})
export class InsigniasComponent implements OnInit {

  insignias=[];
      constructor() {
        this.insignias = Array.from({ length: 10 }).map(
          (el, index) => `insignias ${index + 1}`
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
