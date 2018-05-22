import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      title: "Website Design",
      text: "Aenean quis velit urna. Proin in tortor dictum, congue eros id, rhoncus libero. Proin bibendum elit erat, a eleifend",
      pricing: "$1000 - $3000"
    },
    {
      title: "Website Manteinance",
      text: "Aenean quis velit urna. Proin in tortor dictum, congue eros id, rhoncus libero. Proin bibendum elit erat, a eleifend",
      pricing: "$1000 - $3000"
    },
    {
      title: "Website Host",
      text: "Aenean quis velit urna. Proin in tortor dictum, congue eros id, rhoncus libero. Proin bibendum elit erat, a eleifend",
      pricing: "$1000 - $3000"
    }
  ];
}
