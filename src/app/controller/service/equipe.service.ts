import { Injectable } from '@angular/core';
import {Equipe} from '../model/equipe.model'

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private _equipe : Equipe;
  private _equipes : Array<Equipe> = [
    {id: 1, libette:'libette 1'},
 ];

  constructor() { }
  
  get equipe(): Equipe {
    if (this._equipe == null) {
      this._equipe = new Equipe();
    }
    return this._equipe;
  }

  set equipe(value: Equipe) {
    this._equipe = value;
  }

  get equipes(): Array<Equipe> {
    if (this._equipes == null) {
      this._equipes = new Array<Equipe>();
    }
    return this._equipes;
  }

  set equipes(value: Array<Equipe>) {
    this._equipes = value;
  }

  private cloneEquipe(equipe: Equipe) {
    const cloneEquipe = new Equipe();
    cloneEquipe.id = equipe.id;
    cloneEquipe.libette = equipe.libette;
    return cloneEquipe;
  }
}
