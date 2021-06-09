import { Component, OnInit } from '@angular/core';
import {Projet} from '../../../controller/model/projet.model';
import {ProjetService} from '../../../controller/service/projet.service';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {

  boolProjets = this.projetService.boolProjets; //


  constructor(private projetService:ProjetService) { }


  ngOnInit(): void {
  }

  get projets(): Array<Projet> {
    return this.projetService.projets;
  }

  get openProjetList(): boolean {
    return this.projetService.openProjetList;
  }

  set openProjetList(value: boolean) {
    this.projetService.openProjetList = value;
  }

}
