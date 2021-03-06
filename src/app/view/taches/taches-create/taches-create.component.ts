import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../controller/service/tache.service';
import {Tache} from '../../../controller/model/tache.model';
import {EtatTache} from '../../../controller/model/etat-tache.model';
import {EtatTacheService} from '../../../controller/service/etat-tache.service';

@Component({
  selector: 'app-taches-create',
  templateUrl: './taches-create.component.html',
  styleUrls: ['./taches-create.component.css']
})
export class TachesCreateComponent implements OnInit {

  constructor(private tacheService:TacheService, private etatTacheService:EtatTacheService) { }

  ngOnInit(): void {
    this.etatTacheService.findAll();
  }
  get popUpAdd(): boolean {
    return this.tacheService.popUpAdd;
  }
  set popUpAdd(p:boolean)  {
    this.tacheService.popUpAdd = p;
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
  get etatTaches(): Array<EtatTache> {
    return this.etatTacheService.etatTaches;
  }
  /**/
  private etatCode:string = this.etatTacheService.etatTache.code;
  private tacheCode:string = this.tacheService.tache.code;
  private tacheLibelle:string = this.tacheService.tache.libelle;
  public changeEtat(et){
    this.etatCode = et;
  }
  public saveTacheCode(value){
    this.tacheCode = value;
  }
  public saveTacheLibelle(value){
    this.tacheLibelle = value;
  }
  public save(){
    this.tacheService.save(this.tacheCode,this.tacheLibelle,this.etatCode);
    this.tacheService.popUpAdd = false;
  }

}
