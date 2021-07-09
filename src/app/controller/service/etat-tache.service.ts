import { Injectable } from '@angular/core';
import {EtatTache} from '../model/etat-tache.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtatTacheService {

  private _etatTache = new EtatTache();
  private _etatTaches = new Array<EtatTache>();
  private url = environment.baseUrl + 'equipetache/'

  constructor(private http: HttpClient) { }
  
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
  public cloneEtatTache2(etatCode: string) {
    const cloneEtatTache = new EtatTache();
    cloneEtatTache.code = etatCode;
    return cloneEtatTache;
  }

  public findAll(){
    this.http.get<Array<EtatTache>>(this.url).subscribe(
      data=>{
        this.etatTaches =data;
      }
    );
  }
  public changeEtat(et){
    this.etatTache.code =et;
    console.log(this.etatTache.code)
  }
}
