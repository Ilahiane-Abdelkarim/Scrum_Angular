import { Injectable } from '@angular/core';
import {MembreEquipe} from '../model/membre-equipe.model'

@Injectable({
  providedIn: 'root'
})
export class MembreEquipeService {

  private _membreEquipe : MembreEquipe;
  private _membreEquipes : Array<MembreEquipe> = [
    {id: 1,equipe:{id: 1, libette:'libette 1'},collaborateur:{id: 1, nom:'nom 1', prenom: 'prenom 1'}}
 ];

  constructor() { }
  
  get membreEquipe(): MembreEquipe {
    if (this._membreEquipe == null) {
      this._membreEquipe = new MembreEquipe();
    }
    return this._membreEquipe;
  }

  set membreEquipe(value: MembreEquipe) {
    this._membreEquipe = value;
  }

  get membreEquipes(): Array<MembreEquipe> {
    if (this._membreEquipes == null) {
      this._membreEquipes = new Array<MembreEquipe>();
    }
    return this._membreEquipes;
  }

  set membreEquipes(value: Array<MembreEquipe>) {
    this._membreEquipes = value;
  }

  private cloneMembreEquipe(membreEquipe: MembreEquipe) {
    const cloneMembreEquipe = new MembreEquipe();
    cloneMembreEquipe.id = membreEquipe.id;
    cloneMembreEquipe.equipe = membreEquipe.equipe;
    cloneMembreEquipe.collaborateur = membreEquipe.collaborateur;
    return cloneMembreEquipe;
  }
}
