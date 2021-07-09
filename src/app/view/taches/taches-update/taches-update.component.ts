import { Component, OnInit } from '@angular/core';
import {TacheService} from '../../../controller/service/tache.service';
import {Tache} from '../../../controller/model/tache.model';
import {EtatTache} from '../../../controller/model/etat-tache.model';
import {EtatTacheService} from '../../../controller/service/etat-tache.service';

@Component({
  selector: 'app-taches-update',
  templateUrl: './taches-update.component.html',
  styleUrls: ['./taches-update.component.css']
})
export class TachesUpdateComponent implements OnInit {

  constructor(private tacheService:TacheService, private etatTacheService:EtatTacheService) { }

  ngOnInit(): void {
    this.etatTacheService.findAll();
  }
  private bo:boolean = true;
  get popUpUpdate(): boolean {
    return this.tacheService.popUpUpdate;
  }
  set popUpUpdate(p:boolean)  {
    this.tacheService.popUpUpdate = p;
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

  get updateActive(): boolean {
    return this.bo;
  }
  set updateActive(bol:boolean)  {
    this.bo = bol;
  }
  public changeEtat(et){
    this.etatCode = et;
  }
  public saveTacheCode(value,v2){
    this.tacheCode = value;
    this.tacheCodeOld = v2;
  }
  public saveTacheLibelle(value){
    this.tacheLibelle = value;
  }
  private etatCode:string = this.etatTacheService.etatTache.code;
  private tacheCode:string = this.tacheService.tache.code;
  private tacheCodeOld:string = this.tacheService.tache.code;
  private tacheLibelle:string = this.tacheService.tache.libelle;

  public update(){
    this.tacheService.update(this.tacheCode,this.tacheLibelle,this.etatCode);
  }
  public delete(){
    this.tacheService.delete();
    this.tacheService.popUpUpdate = false;
  }
}
