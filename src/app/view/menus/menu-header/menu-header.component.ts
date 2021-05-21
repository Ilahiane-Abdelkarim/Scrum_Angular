import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../controller/service/projet.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  boolProjets = this.projetService.boolProjets; //
  // boolProjetsacc = this.projetService.etatListProjets;


  constructor(private projetService:ProjetService) { }

  ngOnInit(): void {
  }

  openListProjets() {
    if(this.boolProjets == false){
      // this.projetService.etatListProjets(true);
      // this.boolProjetsacc(true);
      this.boolProjets = true;
    }else{
      // this.projetService.etatListProjets(false);
      // this.boolProjetsacc(false);
      this.boolProjets = false;
    }
  }


}
