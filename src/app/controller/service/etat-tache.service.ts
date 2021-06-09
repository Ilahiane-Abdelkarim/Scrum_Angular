import { Injectable } from '@angular/core';
import {EtatTache} from '../model/etat-tache.model';

@Injectable({
  providedIn: 'root'
})
export class EtatTacheService {

  private _etatTache : EtatTache;
  private _etatTaches : Array<EtatTache> = [
    {id: 1, code:'code 1', libelle: 'EtatTache 1'},
    {id: 2, code:'code 2', libelle: 'EtatTache 2'},
    {id: 3, code:'code 3', libelle: 'EtatTache 3'},
    {id: 4, code:'code 4', libelle: 'EtatTache 4'}
  ];

  constructor() { }
  
  get etatTache(): EtatTache {
    if (this._etatTache == null) {
      this._etatTache = new EtatTache();
    }
    return this._etatTache;
  }

  set etatTache(value: EtatTache) {
    this._etatTache = value;
  }

  get etatTaches(): Array<EtatTache> {
    if (this._etatTaches == null) {
      this._etatTaches = new Array<EtatTache>();
    }
    return this._etatTaches;
  }

  set etatTaches(value: Array<EtatTache>) {
    this._etatTaches = value;
  }

  private cloneEtatTache(lot: EtatTache) {
    const cloneEtatTache = new EtatTache();
    cloneEtatTache.id = lot.id;
    cloneEtatTache.code = lot.code;
    cloneEtatTache.libelle = lot.libelle;
    return cloneEtatTache;
  }
}
