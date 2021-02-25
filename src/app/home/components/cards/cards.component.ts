import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TeamLider } from '@app/core/models/team.model';
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper/core";
// install Swiper components
SwiperCore.use([Autoplay, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  slides=[];
  teams: TeamLider[] = [];

  constructor() {
    this.slides = Array.from({ length: 20 }).map(
      (el, index) => `Slide ${index + 1}`
    );
    this.teams = [new TeamLider(

      'https://avatars.githubusercontent.com/u/7414771?s=460&u=0aafba4f249ef3f06087354f7d3000307dfb5405&v=4',
      'Bezael Perez',
      'Angular'

    ),
    new TeamLider(

      'https://pbs.twimg.com/profile_images/1272913476940451841/AZ3Y5FQR_400x400.jpg',
      'Anartz Mugika Ledo',
      'Angular'

    ),
    new TeamLider(

      'https://www.mayrascript.com/assets/images/photos/profile.jpg',
      'Mayra Rodriguez',
      'Angular'

    ),
    new TeamLider(

      'https://pbs.twimg.com/profile_images/1234056128650235904/x10AJ_bT_400x400.jpg',
      'Nicolas Molina',
      'Angular'

    ),
    new TeamLider(

      './../../../../assets/images/teams/imageDiego.jpeg',
      'Diego Montoya',
      'Angular'

    ), new TeamLider(
      'https://pbs.twimg.com/profile_images/1356803866847834112/Y-N3Lmq3_400x400.jpg',
      'Marcos Rivas',
      'Svelte'

    ),
    new TeamLider(

      './../../../../assets/images/teams/imageManuel.jpg',
      'Manuel Muñoz',
      'Svelte'

    ),
    new TeamLider(

      './../../../../assets/images/teams/imageNoah.jpg',
      'Noah Kaufman',
      'Svelte'

    ),
    new TeamLider(

      'https://pbs.twimg.com/profile_images/766221995436544000/r_C7l_bZ_400x400.jpg',
      'Silvestre Vivo',
      'Svelte'

    ),
    new TeamLider(

      'https://media-exp1.licdn.com/dms/image/C4E03AQF5Gb217kOciQ/profile-displayphoto-shrink_800_800/0/1586024714974?e=1619654400&v=beta&t=gppi2Krp3Kp5rCxXuLZgCn4OXleDH_0AhLyrXKSZxRo',
      'Oscar Barajas',
      'Svelte'

    ), new TeamLider(
      'https://media-exp1.licdn.com/dms/image/C5603AQEAlgfDImyHDQ/profile-displayphoto-shrink_800_800/0/1597556778538?e=1619654400&v=beta&t=bD45N-g9mOPK1XerceqETY8HNImeObTWu8izmzCnWsM',
      'Diego Plascencia',
      'React'

    ),
    new TeamLider(

      'https://media-exp1.licdn.com/dms/image/C4E03AQHdGkxx75UP2A/profile-displayphoto-shrink_200_200/0/1607446453798?e=1619654400&v=beta&t=GJKqK4psIlcxKThgbqsDxDq_RNm3ReRfKhcXAjzC4KI',
      'Vanessa Marely',
      'React'

    ),
    new TeamLider(

      'https://media-exp1.licdn.com/dms/image/C4E03AQE-N3hOCY0Z9g/profile-displayphoto-shrink_200_200/0/1607101295552?e=1619654400&v=beta&t=UTELJhiwFA_FeqnxWv2DgHrGoI1YjtDVO1lNCqWfgWc',
      'Lina María Montaño',
      'React'

    ),
    new TeamLider(

      'https://media-exp1.licdn.com/dms/image/C4D03AQFuLVaoiiiLZQ/profile-displayphoto-shrink_200_200/0/1600202685045?e=1619654400&v=beta&t=T7GXeaJsuTS5ig17W4VLEq47zUkAczAXZXRHVLY40is',
      'Martin Bavio',
      'React'

    ),
    new TeamLider(

      'https://media-exp1.licdn.com/dms/image/C4E03AQEnwmRNAWFXVQ/profile-displayphoto-shrink_200_200/0/1545259997950?e=1619654400&v=beta&t=s7A0Yf_wYCVFpp5z0I1phWNIVsvgq9KfYcmLD6LeaD0',
      'Lara Diaz',
      'React'

      ), new TeamLider(
        './../../../../assets/images/teams/imageChristopher.jpeg',
        'Christopher Paniagua',
        'Vue'

      ),
      new TeamLider(

        'https://res.cloudinary.com/practicaldev/image/fetch/s--_vrLXzLy--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/232907/811f85ec-b815-41ab-bd3e-cf978a6f9719.jpg',
        'Manuel Ojeda',
        'Vue'

      ),
      new TeamLider(

        './../../../../assets/images/teams/imageDeLaRosa.jpg',
        'Fernando de la Rosa',
        'Vue'

      ),
      new TeamLider(

        'https://pbs.twimg.com/profile_images/1341223548866707457/dRO8gf6Y_400x400.jpg',
        'Noemi Leon',
        'Vue'

      ),
      new TeamLider(

        'https://pbs.twimg.com/profile_images/1316487669296386048/sbqJxLkk_400x400.jpg',
        'Ignacio Anaya',
        'Vue'

      )

    ]
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
