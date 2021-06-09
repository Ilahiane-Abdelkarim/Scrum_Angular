import { Injectable } from '@angular/core';
import {Collaborateur} from '../model/collaborateur.model'

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {
  private _collaborateur : Collaborateur;
  private _collaborateurs : Array<Collaborateur> = [
    {id: 1, nom:'nom 1', prenom: 'prenom 1'},
 ];

  constructor() { }
  
  get collaborateur(): Collaborateur {
    if (this._collaborateur == null) {
      this._collaborateur = new Collaborateur();
    }
    return this._collaborateur;
  }

  set collaborateur(value: Collaborateur) {
    this._collaborateur = value;
  }

  get collaborateurs(): Array<Collaborateur> {
    if (this._collaborateurs == null) {
      this._collaborateurs = new Array<Collaborateur>();
    }
    return this._collaborateurs;
  }

  set collaborateurs(value: Array<Collaborateur>) {
    this._collaborateurs = value;
  }

  private cloneCollaborateur(collaborateur: Collaborateur) {
    const cloneCollaborateur = new Collaborateur();
    cloneCollaborateur.id = collaborateur.id;
    cloneCollaborateur.nom = collaborateur.nom;
    cloneCollaborateur.prenom = collaborateur.prenom;
    return cloneCollaborateur;
  }
}
