import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Main1Component } from '../app/main1/main1.component';
import { Main2Component } from '../app/main2/main2.component';

import { Main1SubAComponent } from './main1-sub-a/main1-sub-a.component';
import { Main1SubAAComponent } from './main1-sub-aa/main1-sub-aa.component';
import { Main1SubABComponent } from './main1-sub-ab/main1-sub-ab.component';


import { Main1SubBComponent } from './main1-sub-b/main1-sub-b.component';
import { Main1SubBAComponent } from './main1-sub-ba/main1-sub-ba.component';
import { Main1SubBBComponent } from './main1-sub-bb/main1-sub-bb.component';


const routes: Routes = [
  { path: 'Main1', component:  Main1Component, 
      children: [      
        { path: 'Main1SubA/Main1SubAA', component:  Main1SubAAComponent},
        { path: 'Main1SubA/Main1SubAB', component:  Main1SubABComponent},
        { path: 'Main1SubB/Main1SubBA', component:  Main1SubBAComponent, outlet:"sidebar"},
        { path: 'Main1SubB/Main1SubBB', component:  Main1SubBBComponent, outlet:"sidebar"},
      ]      
  },
  { path: 'Main2', component: Main2Component},
];


/*

{ path: 'Main1SubB', component:  Main1SubBComponent},
{ path: 'Main1SubB/Main1SubBA', component:  Main1SubBAComponent},
{ path: 'Main1SubB/Main1SubBB', component:  Main1SubBBComponent},




const routes: Routes = [
  { path: 'Main1', component:  Main1Component, 
      children: [        
        { path: 'Main1SubA', component:  Main1SubAComponent,
            children: [
              { path: 'Main1SubAA', component:  Main1SubAAComponent},
              { path: 'Main1SubAB', component:  Main1SubABComponent}
            ],
        },
        { path: 'Main1SubB', component:  Main1SubBComponent}
      ]      
  },
  { path: 'Main2', component: Main2Component},
  { path: 'Main3', component: Main3Component},
];
*/



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
