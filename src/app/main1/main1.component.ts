import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1; 

  constructor(private router: Router) { 
    this.navLinks = [
      {
          label: 'Sub1',
          link: './Main1Sub1',
          index: 0
      }, {
          label: 'Sub2',
          link: './Main1Sub2',
          index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
