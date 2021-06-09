import { Injectable } from '@angular/core';
import {Lot} from '../model/lot.model';

@Injectable({
  providedIn: 'root'
})
export class LotService {
  private _lot : Lot;
  private _lots : Array<Lot> = [
    {id: 1, code:'List(lot) 1', libelle: 'List 1 (lot)', projet:{id: 1, ref: 'P1', libelle: 'Projet 1',code:'code 1', client:{id: 1, nom: 'Ali', email: 'ali@gmail.com'}, avancement:'avancement 1', color: 'purple'}, categorie:{id:1, libelle: 'Categorie 1',code:'code 1'} },
    {id: 2, code:'List(lot) 2', libelle: 'List 2', projet:{id: 2, ref: 'P2', libelle: 'Projet 2',code:'code 2', client:{id: 2, nom: 'Ahmed', email: 'Ahmed@gmail.com'}, avancement:'avancement 2', color: 'purple'}, categorie:{id:2, libelle: 'Categorie 2',code:'code 2'} },
    {id: 3, code:'List(lot) 3', libelle: 'List 3', projet:{id: 3, ref: 'P3', libelle: 'Projet 3',code:'code 3', client:{id: 3, nom: 'Amina', email: 'amina@gmail.com'}, avancement:'avancement 3', color: 'purple'}, categorie:{id:3, libelle: 'Categorie 3',code:'code 3'} },
    {id: 4, code:'List(lot) 4', libelle: 'List 4', projet:{id: 4, ref: 'P4', libelle: 'Projet 4',code:'code 4', client:{id: 4, nom: 'Ahlam', email: 'ahlam@gmail.com'}, avancement:'avancement 4', color: 'purple'}, categorie:{id:4, libelle: 'Categorie 4',code:'code 4'} }
  ];

  constructor() { }
  
  get lot(): Lot {
    if (this._lot == null) {
      this._lot = new Lot();
    }
    return this._lot;
  }

  set lot(value: Lot) {
    this._lot = value;
  }

  get lots(): Array<Lot> {
    if (this._lots == null) {
      this._lots = new Array<Lot>();
    }
    return this._lots;
  }

  set lots(value: Array<Lot>) {
    this._lots = value;
  }

  private cloneLot(lot: Lot) {
    const cloneLot = new Lot();
    cloneLot.id = lot.id;
    cloneLot.code = lot.code;
    cloneLot.libelle = lot.libelle;
    cloneLot.projet = lot.projet;
    cloneLot.categorie = lot.categorie;
    return cloneLot;
  }
}
