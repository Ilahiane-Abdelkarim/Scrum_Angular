import { Injectable } from '@angular/core';
import {Tache} from '../model/tache.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ProjetService} from '../service/projet.service';
import {EtatTacheService} from '../service/etat-tache.service';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private url = environment.baseUrl + 'tache/'
  private _tache = new Tache();
  private _taches = new Array<Tache>();
  private _popUpUpdate = false;
  private _popUpAdd = false;
  private i=-1;
//    = [
//     {id: 1, libelle: 'Tache 1', datedebut:new Date("2018-03-09Z08:00:00"), datefin:new Date("2018-03-09Z08:00:00"),lot:{id: 1, code:'code 1', libelle: 'Lot 1', projet:{id: 1, ref: 'P1', libelle: 'Projet 1',code:'code 1', client:{id: 1, nom: 'Ali', email: 'ali@gmail.com'}, avancement:'avancement 1', color: 'purple'}, categorie:{id:1, libelle: 'Categorie 1',code:'code 1'} },etat:{id: 1, code:'code 1', libelle: 'EtatTache 1'},membreEquipe:{id: 1,equipe:{id: 1, libette:'libette 1'},collaborateur:{id: 1, nom:'nom 1', prenom: 'prenom 1'}}},
//  ];

  constructor(private http: HttpClient, private projetService: ProjetService, private etatTacheService: EtatTacheService) { }
  
  get tache(): Tache {
    if (this._tache == null) {
      this._tache = new Tache();
    }
    return this._tache;
  }
  public selectI(i: number) {
    this.i = i;
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

  get popUpUpdate(): boolean {
    return this._popUpUpdate;
  }

  set popUpUpdate(value: boolean) {
    this._popUpUpdate = value;
  }
  get popUpAdd(): boolean {
    return this._popUpAdd;
  }

  set popUpAdd(value: boolean) {
    this._popUpAdd = value;
  }

  private cloneTache(newCode: string, tacheLib: string,etatCode: string) {
    const cloneTache = new Tache();
    cloneTache.libelle = tacheLib;
    cloneTache.code = newCode;
    cloneTache.etat = this.etatTacheService.cloneEtatTache2(etatCode);
    cloneTache.projet = this.projetService.projet;
    return cloneTache;
  }
  public findByLotCodeAndLotProjetCode(lcode,pcode) {

    this.http.get<Array<Tache>>(this.url+'lot/lcode/{lCode}/projet/pCode/{pCode}?lCode='+lcode+'&pCode='+pcode).subscribe(
      data=>{
        if (data == null) {
          alert("Type Existe pas!");
        }else{
          this.taches = data;
          console.log(data);
          // return data;
        }

      }
    );
    
  }
  public findByProjetCode(code) {

    this.http.get<Array<Tache>>(this.url+'/projet/code/'+code).subscribe(
      data=>{
        if (data == null) {
          alert("Type Existe pas!");
        }else{
          this.taches = data;
          console.log(data);
          // console.log(this.lots)
          // this.lots.forEach(element => {
          //   this.tacheService.findByLotCodeAndLotProjetCode(element.code,code);
          // });
          
        }

      }
    );
    
  }
  update(newCode: string, tacheLib: string,etatCode: string) {
    // console.log(newCode);
    // console.log(tacheLib);
    var codeN :string = '&newCode='+newCode;
    if(newCode == undefined){
      codeN = "";
    }
    if(tacheLib == undefined){
      tacheLib = this.taches[this.i].libelle;
    }
    // console.log(newCode);
    // console.log(tacheLib);
      this.http.put(this.url+'code/'+this.taches[this.i].code+'/newCode/{newCode}/projetCode/{projetCode}/libelle/{libelle}/etatCode/{etatCode}?etatCode='+etatCode+'&libelle='+tacheLib+codeN+'&projetCode='+this.projetService.projet.code,'').subscribe(
      data => {
        if (data > 0) {
          this.popUpUpdate = !this.popUpUpdate;
          if(newCode != null){
            this.taches[this.i].code = newCode;
          }
          if(tacheLib != null){
            this.taches[this.i].libelle = tacheLib;
          }
          if(etatCode != null){
            this.taches[this.i].etat.code = etatCode;
          }
          
          // console.log(this.taches[this.i].etat.code);
        } else {
          alert('error num :'+data);
        }
      }, error => {
        alert('error modefier == ' + error.message);
      }
    );

  }
    public save(newCode: string, tacheLib: string,etatCode: string) {
    if(newCode == null || newCode == ""){
      alert("Remplires le champ nom");
    }else if(tacheLib == null || tacheLib == ""){
      alert("Remplires le champ description");
    }else if(etatCode == null || etatCode == ""){
      // alert("Remplires le champ etat");
      etatCode =this.etatTacheService.etatTaches[0].code;
    }else{
      const tache = this.cloneTache(newCode,tacheLib,etatCode);
      this.http.post(this.url+'/', tache).subscribe(
        data => {
          if (data > 0) {
            this.taches.push(tache);
            this.findByProjetCode(this.projetService.projet.code);
          } else {
            alert("Etat deja Exist!");
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
    if(this.i >=0){
      const code = this.taches[this.i].code;
      // console.log(code);
      console.log(this.taches[this.i].code);
      this.http.delete(this.url+'code/'+code).subscribe(
        data => {
          if (data > 0) {
            this.taches.splice(this.i,1);
          } else {
            alert('error num :'+data);
          }
        }, error => {
          alert('error delete == ' + error.message);
        }
      );
      this.i = -1;
    }else{
      alert(this.taches[this.i].code);
    }
  }
  // public findByLotCodeAndLotProjetCode() {

  //   this.http.get<Array<Tache>>(this.url+'lot/lcode/{lCode}/projet/pCode/{pCode}?lCode='+lcode+'&pCode='+pcode).subscribe(
  //     data=>{
  //       if (data == null) {
  //         alert("Type Existe pas!");
  //       }else{
  //         this.taches = data;
  //         console.log(data);
  //       }

  //     }
  //   );
    
  // }
  // public save() {
  //   if(this.societe.ice == null || this.societe.ice == ""){
  //     alert("Remplires le champ ice");
  //   }else if(this.societe.libelle == null || this.societe.libelle == ""){
  //     alert("Remplires le champ libelle");
  //   }else if(this.societe.siegeSociete == null || this.societe.siegeSociete == ""){
  //     alert("Remplires le champ libelle");
  //   }else{
  //     const societe = this.clone(this.societe);
  //     this.http.post(this.urlBase+this.url+'/', societe).subscribe(
  //       data => {
  //         if (data > 0) {
  //           this.societes.push(societe);
  //           this.findAll();
  //           // alert("Bien Ajouter!");
  //         } else {
  //           alert("Type deja Exist!");
  //         }
  //       }, error => {
  //         alert('Societe post error == ' + error.message);
  //       }
  //     );
  //     // @ts-ignore
  //     this.societe = null;
  //   }
  // }
  // update(i: number, ts: TypeSociete,lib: string) {
  //   // this.typeSociete = ts;
  //   // const typeSociete = this.clone2(ts);
  //   this.http.put(this.urlBase+this.url+'/code/'+ts.code+'/libelle/'+lib,'').subscribe(
  //     data => {
  //       if (data > 0) {
  //         // alert("Bien modefier!");
  //         this.findAll();
  //       } else {
  //         alert('error num :'+data);
  //       }
  //     }, error => {
  //       alert('error modefier == ' + error.message);
  //     }
  //   );

  // }
  // public delete() {
  //   if(this.i >=0){
  //     const code = this.typeSocietes[this.i].code;
  //     // console.log(code);
  //     this.http.delete(this.urlBase+this.url+'/code/{code}?code='+code).subscribe(
  //       data => {
  //         if (data > 0) {
  //           this.typeSocietes.splice(this.i,1);
  //         } else {
  //           alert('error num :'+data);
  //         }
  //       }, error => {
  //         alert('error delete == ' + error.message);
  //       }
  //     );
  //     this.i = -1;
  //   }else{
  //     alert("select un type societe!");
  //   }
  // }
}
