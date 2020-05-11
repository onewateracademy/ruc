import { Component, OnInit } from "@angular/core";
import { ModalFunctions } from "../common/modal-functions";
import { EventsData } from "./events-data";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  styleUrls: ["./resources.component.scss"],
})
export class ResourcesComponent implements OnInit {
  topevents = [];
  pastevents = [];
  currentEvent: {
    topic:'',
    date:'',
    speakers:[],
    desc:'',
    //img:null,
  };
  constructor(public modal: ModalFunctions, public eventsData: EventsData) {}

  ngOnInit() {
    this.topevents = this.eventsData.topEvents;
    this.pastevents = this.eventsData.pastEvents;
    console.log(this.pastevents);
  }

  showEvent(currevent) {
    this.currentEvent = currevent;
    this.modal.openModal("#eventModal");
  }
}
