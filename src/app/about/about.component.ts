import { Component, OnInit } from '@angular/core';
import { ModalFunctions } from '../common/modal-functions';
import {teamMembers} from './team-members';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  executives;
  directors;
  currentMember:{
    img,name,position,org,about;
  }
  constructor(public modal: ModalFunctions, public team: teamMembers) { }

  ngOnInit() {
    this.executives = this.team.executives;
    this.directors = this.team.directors;
  }

  showMember(member){
    this.currentMember = member;
    this.modal.openModal('#teamMemberModal');
  }

  ;

}
