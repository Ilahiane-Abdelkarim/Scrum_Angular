import { Component, OnInit } from '@angular/core';
import {Projet} from '../../../controller/model/projet.model';
import {ProjetService} from '../../../controller/service/projet.service';
import {LotService} from '../../../controller/service/lot.service';
import {TacheService} from '../../../controller/service/tache.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.css']
})
export class ProjetsListComponent implements OnInit {

  boolProjets = this.service.boolProjets; //


  constructor(private service:ProjetService,private lotService:LotService,private tacheService:TacheService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.service.findByClientEmail();

  }

  get projets(): Array<Projet> {
    return this.service.projets;
  }

  get openProjetList(): boolean {
    return this.service.openProjetList;
  }

  set openProjetList(value: boolean) {
    this.service.openProjetList = value;
  }

  set projet(value: Projet){
    this.service.projet = value;
  }
 
  findByCode(i){
    this.openProjetList = false;
    this.service.selectI(i);
    this.service.projet2 = this.service.projets[i];
    this.service.findByCode(i);
    // const routeParams = this.route.snapshot.paramMap;
    // const projetIdFromRoute = String(routeParams.get('projetId'));
    // console.log(this.service.projets[i].code);
    this.tacheService.findByProjetCode(this.service.projets[i].code);
  
    // console.log(this.tacheService.findByLotCodeAndLotProjetCode());
    // console.log(this.lotService.lots[i].code);
    // this.tacheService.findByLotCodeAndLotProjetCode(this.lotService.lots[i].code,this.service.projets[i].code);
    // this.tacheService.findByLotCodeAndLotProjetCode();
  }


}
