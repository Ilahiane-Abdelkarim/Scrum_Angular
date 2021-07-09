import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../controller/service/projet.service';
import {ClientService} from '../../../controller/service/client.service';
import { Router } from '@angular/router';

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
  // public user = this.projetService.user;
  public logOut(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['../login']);
    setTimeout(function(){ location.reload(); }, 300);
  }


  constructor(private projetService:ProjetService,private clientService:ClientService,private router: Router) { }

  set user(value: string) {
    this.projetService.user = value;
  }

  get user(): string {
    return this.projetService.user;
  }
  get popUpSave(): boolean {
    return this.projetService.popUpSave;
  }
  set popUpSave(p:boolean)  {
    this.projetService.popUpSave = p;
  }
  get popUpSave2(): boolean {
    return this.clientService.popUpSave;
  }
  set popUpSave2(p:boolean)  {
    this.clientService.popUpSave = p;
  }
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
