import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() home: Boolean = false;
  constructor() { }

  ngOnInit() {
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      }
    });

    $('.nav-link').on('click', function () {
      if($('.collapse').hasClass('show')){
        $('.collapse').removeClass('show')
      }
      else
      $('.collapse').addClass('show')
    });
  }

}
