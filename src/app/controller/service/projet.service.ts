import { Injectable } from '@angular/core';
import {Projet} from '../model/projet.model';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {ClientService} from '../../controller/service/client.service';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  boolProjets = false; //
  private url = environment.baseUrl + 'projet/'
  private _projet = new Projet();
  private _projet2 = new Projet();
  private _projets = new Array<Projet>();
  private _popUpUpdate = false;
  private _popUpSave = false;
  private _user = localStorage.getItem('currentUser');
  private i=-1;
  // = [
  //   {id: 1, ref: 'P1', libelle: 'Projet 1',code:'code 1', client:{id: 1, nom: 'Ali', email: 'ali@gmail.com'}, avancement:'avancement 1', color: 'purple'},
  //   {id: 2, ref: 'P2', libelle: 'Projet 2',code:'code 2', client:{id: 2, nom: 'Ahmed', email: 'Ahmed@gmail.com'}, avancement:'avancement 2', color: 'blue'},
  //   {id: 3, ref: 'P3', libelle: 'Projet 3',code:'code 3', client:{id: 3, nom: 'Amina', email: 'amina@gmail.com'}, avancement:'avancement 3', color: 'green'},
  //   {id: 4, ref: 'P4', libelle: 'Projet 4',code:'code 4', client:{id: 4, nom: 'Ahlam', email: 'ahlam@gmail.com'} ,avancement:'avancement 4', color: 'orange'}
  // ];
  private _openProjetList : boolean = false; //


  // public save(){
  //   this.projets.push(this.cloneProjet(this.projet));
  // }
  public selectI(i: number) {
    this.i = i;
  }

  
  constructor(private http: HttpClient,private clientService:ClientService) { }

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
  set projet2(value: Projet) {
    this._projet2 = value;
  }

  get projet2(): Projet {
    if (this._projet2 == null) {
      this._projet2 = new Projet();
    }
    return this._projet2;
  }
  set user(value: string) {
    this._user = value;
  }

  get user(): string {
    return this._user;
  }
  // get client(): Client {
  //   if (this._client == null) {
  //     this._client = new Client();
  //   }
  //   return this._client;
  // }

  // set client(value: Client) {
  //   this._client = value;
  // }

  set projets(value: Array<Projet>) {
    this._projets = value;
  }
  get popUpUpdate(): boolean {
    return this._popUpUpdate;
  }

  set popUpUpdate(value: boolean) {
    this._popUpUpdate = value;
  }
  get popUpSave(): boolean {
    return this._popUpSave;
  }

  set popUpSave(value: boolean) {
    this._popUpSave = value;
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
  public findAll(){
    this.http.get<Array<Projet>>(this.url).subscribe(
      data=>{
        this.projets =data;
      }
    );
  }
  public findByClientEmail(){
    this.http.get<Array<Projet>>(this.url+"/client/email/"+this.user).subscribe(
      data=>{
        this.projets =data;
      }
    );
  }
  public select(i: number) {
    this.i = i;
  }
  public findByCode(i) {
    const code = this.projets[i].code;

    this.http.get<Projet>(this.url+'/code/'+code).subscribe(
      data=>{
        if (data == null) {
          alert("Type Existe pas!");
        }else{
          this.projet = data;
          this.clientService.client = data.client; 
        }

      }
    );
    
  }
  public findByCode2(code) {

    this.http.get<Projet>(this.url+'/code/'+code).subscribe(
      data=>{
        if (data == null) {
          alert("Type Existe pas!");
        }else{
          this.projet = data;
          this.clientService.client = data.client;
        }

      }
    );
  }

  update(codeV: string, ref: string,libelle: string ,avancement: string ,color: string) {
    var codeS :string = '&newCode='+codeV;
    var refS :string = '&ref='+ref;
    var libelleS :string = '&libelle='+libelle;
    var avancementS :string = '&avancement='+avancement;
    var colorS :string = '&color='+color;
    if(codeV == this.projet.code){
      codeS = "";
    }
    if(codeV == undefined){
      codeS = "";
    }
    if(ref == undefined){
      refS = "";
    }
    if(libelle == undefined){
      libelleS = "";
    }
    if(avancement == undefined){
      avancementS = "";
    }
    if(color == "f"){
      colorS = "";
    }
      this.http.put(this.url+'code/'+this.projet.code+'/newCode/{newCode}/ref/{ref}/libelle/{libelle}/avancement/{avancement}/color/{color}/emailClient/{emailClient}?emailClient='+this.user+codeS+refS+libelleS+avancementS+colorS,'').subscribe(
      data => {
        if (data > 0) {
          this.popUpUpdate = !this.popUpUpdate;
          
        } else {
          alert('error num :'+data);
        }
      }, error => {
        alert('error modefier == ' + error.message);
      }
    );

  }

  public save(codeV: string, ref: string,libelle: string ,avancement: string ,color: string) {
    if(codeV == null || codeV == ""){
      alert("Remplires le champ code");
    }else if(ref == null || ref == ""){
      alert("Remplires le champ ref");
    }
    else if(libelle == null || libelle == ""){
      alert("Remplires le champ libelle");
    }
    else if(avancement == null || avancement == ""){
      alert("Remplires le champ avancement");
    }
    else if(ref == null || ref == ""){
      alert("Remplires le champ description");
    }
    else{
      const p = new Projet();
      const c = new Client();
      c.email = this.user;
      p.avancement = avancement;
      p.code = codeV;
      p.client = c;
      p.color = color;
      p.libelle = libelle;
      p.ref = ref;
      this.http.post(this.url+'/', p).subscribe(
        data => {
          if (data > 0) {
            this.projets.push(p);
          } else {
            alert("Projet Nom deja Exist!");
          }
        }, error => {
          alert('Etat post error == ' + error.message);
        }
      );
      // @ts-ignore
      // this.societe = null;
    }
  }
  public delete() {
      this.http.delete(this.url+'code/'+this.projet.code).subscribe(
        data => {
          if (data > 0) {
            this.findByClientEmail();
          } else {
            alert('error num :'+data);
          }
        }, error => {
          alert('error delete == ' + error.message);
        }
      );
      this.i = -1;
  }

}
