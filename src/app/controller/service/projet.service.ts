import { Injectable } from '@angular/core';
import {Projet} from '../model/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  boolProjets = false; //
  private _projet : Projet;
  private _projets : Array<Projet> = [
    {id: 1, ref: 'P1', libelle: 'Projet 1',code:'code 1', client:{id: 1, nom: 'Ali', email: 'ali@gmail.com'}, avancement:'avancement 1', color: 'purple'},
    {id: 2, ref: 'P2', libelle: 'Projet 2',code:'code 2', client:{id: 2, nom: 'Ahmed', email: 'Ahmed@gmail.com'}, avancement:'avancement 2', color: 'blue'},
    {id: 3, ref: 'P3', libelle: 'Projet 3',code:'code 3', client:{id: 3, nom: 'Amina', email: 'amina@gmail.com'}, avancement:'avancement 3', color: 'green'},
    {id: 4, ref: 'P4', libelle: 'Projet 4',code:'code 4', client:{id: 4, nom: 'Ahlam', email: 'ahlam@gmail.com'} ,avancement:'avancement 4', color: 'orange'}
  ];
  private _openProjetList : boolean = false; //


  constructor() { }

  get projet(): Projet {
    if (this._projet == null) {
      this._projet = new Projet();
    }
    return this._projet;
  }

  set projet(value: Projet) {
    this._projet = value;
  }

  get projets(): Array<Projet> {
    if (this._projets == null) {
      this._projets = new Array<Projet>();
    }
    return this._projets;
  }

  set projets(value: Array<Projet>) {
    this._projets = value;
  }

  get openProjetList(): boolean {
    return this._openProjetList;
  }

  set openProjetList(value: boolean) {
    this._openProjetList = value;
  }

  private cloneProjet(projet: Projet) {
    const cloneProjet = new Projet();
    cloneProjet.id = projet.id;
    cloneProjet.ref = projet.ref;
    cloneProjet.libelle = projet.libelle;
    cloneProjet.code = projet.code;
    cloneProjet.client = projet.client;
    cloneProjet.avancement = projet.avancement;
    return cloneProjet;
  }

}
