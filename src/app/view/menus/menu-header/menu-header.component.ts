import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../controller/service/projet.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  private primaryMenu : boolean = false;
  // private _colors : Array<string> = ["purple","blue","green","orange"];
  private _colors : { ref: string, code: string }[]= 
  [{ref:"purple",code:"673ab7"},{ref:"blue",code:"2196f3"},{ref:"green",code:"009688"},{ref:"orange",code:"f57f17"}];


  constructor(private projetService:ProjetService) { }

  get colors(): Array<Object> {
    return this._colors;
  }

  ngOnInit(): void {
  }

  get openProjetList(): boolean {
    return this.projetService.openProjetList;
  }

  set openProjetList(value: boolean) {
    this.projetService.openProjetList = value;
  }

  get primaryMenuB(): boolean {
    return this.primaryMenu;
  }

  set primaryMenuB(value: boolean) {
    this.primaryMenu = value;
  }



}
