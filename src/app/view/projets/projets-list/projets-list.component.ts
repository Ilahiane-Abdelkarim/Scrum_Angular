import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../controller/service/projet.service';

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {

  boolProjets = this.projetService.boolProjets; //


  constructor(private projetService:ProjetService) { }

  listProjets: Array<{key: number, color: string, ref: string, libelle: string}> = [
    {key: 1, color: 'purple', ref: 'P1', libelle: 'Projet 1'},
    {key: 2, color: 'blue', ref: 'P2', libelle: 'Projet 2'},
    {key: 3, color: 'green', ref: 'P3', libelle: 'Projet 3'},
    {key: 4, color: 'orange ', ref: 'P4', libelle: 'Projet 4'},
  ];


  ngOnInit(): void {
  }
  closeListProjets() {
    // this.boolProjets = false;
    console.log(this.boolProjets);
}

}
