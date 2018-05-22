import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  boxes = [
    {
      link: "assets/img/logo_html.png",
      title: "Html5 Markup",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia mauris id dui finibus dignissim."
    },
    {
      link: "assets/img/logo_css.png",
      title: "CSS3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia mauris id dui finibus dignissim."
    },
    {
      link: "assets/img/logo_brush.png",
      title: "Graphic Design",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia mauris id dui finibus dignissim."
    }
  ];

}
