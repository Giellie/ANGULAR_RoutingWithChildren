import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks: any[];
  activeLinkIndex = -1; 

  constructor(private router: Router){

    /*
    this.navLinks = [
      {
          label: 'Main1',
          link: './Main1',
          index: 0
      }, {
          label: 'Main2',
          link: './Main2',
          index: 1
      }, {
          label: 'Main3',
          link: './Main3',
          index: 2
      }, 
    ];
    */

  }

  ngOnInit(): void {
    /*
    this.router.events.subscribe((res) => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    */
  }

}
