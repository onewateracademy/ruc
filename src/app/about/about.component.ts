import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from '../common/modal-functions';
import {teamMembers} from '../data/team-members';
import { Images } from '../data/light-box-imgs';
import { Lightbox, LightboxConfig  } from 'ngx-lightbox';
import { EventsData } from '../data/events-data';
import { WorkshopData } from '../data/ruc-visioning-workshop-presentaions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  executives;
  directors;
  aboutImages;
  currentEvent;
  currentMember:{
    img,name,position,org,about;
  }
  constructor(public modal: ModalFunctions, public team: teamMembers, public images: Images,public _lightbox: Lightbox,private _lightboxConfig: LightboxConfig, public workshopData: WorkshopData){ 

    this._lightboxConfig.fadeDuration =0.5
    this._lightboxConfig.centerVertically = true;

  }


  ngOnInit() {
    this.executives = this.team.executives;
    this.directors = this.team.directors;
    this.aboutImages = this.images.aboutImgs;
    console.log(this.aboutImages);

    this.currentEvent = this.workshopData.data;
    console.log(this.currentEvent);
  }

  showMember(member){
    this.currentMember = member;
    this.modal.openModal('#teamMemberModal');
  };

  showPresentations() {
    this.modal.openModal("#eventModal");
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.aboutImages, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    dots: false,
    stagePadding: 30,
    navText: ['<img src="assets/img/icon/left.svg" style="width:30px;">', '<img src="assets/img/icon/right.svg" style="width:30px;">'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        stagePadding: 50
      },
     1000: {
        items: 3,
      }
    }
  }

}
