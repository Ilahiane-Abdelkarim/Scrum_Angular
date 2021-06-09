import { Injectable } from '@angular/core';
import {Tache} from '../model/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private _tache : Tache;
  private _taches : Array<Tache> = [
    {id: 1, libelle: 'Tache 1', datedebut:new Date("2018-03-09Z08:00:00"), datefin:new Date("2018-03-09Z08:00:00"),lot:{id: 1, code:'code 1', libelle: 'Lot 1', projet:{id: 1, ref: 'P1', libelle: 'Projet 1',code:'code 1', client:{id: 1, nom: 'Ali', email: 'ali@gmail.com'}, avancement:'avancement 1', color: 'purple'}, categorie:{id:1, libelle: 'Categorie 1',code:'code 1'} },etat:{id: 1, code:'code 1', libelle: 'EtatTache 1'},membreEquipe:{id: 1,equipe:{id: 1, libette:'libette 1'},collaborateur:{id: 1, nom:'nom 1', prenom: 'prenom 1'}}},
 ];

  constructor() { }
  
  get tache(): Tache {
    if (this._tache == null) {
      this._tache = new Tache();
    }
    return this._tache;
  }

  set tache(value: Tache) {
    this._tache = value;
  }

  get taches(): Array<Tache> {
    if (this._taches == null) {
      this._taches = new Array<Tache>();
    }
    return this._taches;
  }

  set taches(value: Array<Tache>) {
    this._taches = value;
  }

  private cloneTache(tache: Tache) {
    const cloneTache = new Tache();
    cloneTache.id = tache.id;
    cloneTache.libelle = tache.libelle;
    cloneTache.datedebut = tache.datedebut;
    cloneTache.datefin = tache.datefin;
    cloneTache.etat = tache.etat;
    cloneTache.membreEquipe = tache.membreEquipe;
    cloneTache.lot = tache.lot;
    return cloneTache;
  }
}
