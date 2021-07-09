import { Component, OnInit } from '@angular/core';
import {Tache} from '../../../controller/model/tache.model';
import {TacheService} from '../../../controller/service/tache.service';
import {ActivatedRoute} from "@angular/router";
import {EtatTache} from '../../../controller/model/etat-tache.model';
import {EtatTacheService} from '../../../controller/service/etat-tache.service';


@Component({
  selector: 'app-taches-list',
  templateUrl: './taches-list.component.html',
  styleUrls: ['./taches-list.component.css']
})
export class TachesListComponent implements OnInit {

  constructor(private tacheService:TacheService,private etatTacheService:EtatTacheService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.tacheService.findByLotCodeAndLotProjetCode();
    // this.tacheService.findByLotCodeAndLotProjetCode(this.lotService.lots,code);
    // console.log("hello");
    // console.log(this.projetService.projet);
    // console.log(this.projetService.projet.code);
    // this.lotService.lots.forEach(lot => {
      // console.log(this.tacheService.findByLotCodeAndLotProjetCode(lot.code,this.projetService.projet.code));
      
    // });
    const routeParams = this.route.snapshot.paramMap;
const projetIdFromRoute = String(routeParams.get('projetId'))
  this.tacheService.findByProjetCode(projetIdFromRoute);
  // console.log(this.tacheService.taches)
  }

  get taches(): Array<Tache> {
    return this.tacheService.taches;
  }
  get tache(): Tache {
    return this.tacheService.tache;
  }
  set tache(t:Tache)  {
    this.tacheService.tache = t;
  }
  get etatTache(): EtatTache {
    return this.etatTacheService.etatTache;
  }
  set etatTache(et:EtatTache)  {
    this.etatTacheService.etatTache = et;
  }
  get popUpUpdate(): boolean {
    return this.tacheService.popUpUpdate;
  }
  set popUpUpdate(p:boolean)  {
    this.tacheService.popUpUpdate = p;
  }
  public select(i){
    this.tache =  this.tacheService.taches[i];
    this.etatTache = this.tacheService.taches[i].etat;
    this.tacheService.selectI(i);
    this.popUpUpdate = !this.popUpUpdate;
    console.log(this.popUpUpdate);
  }


}
