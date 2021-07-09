import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
// import {ProjetService} from '../../controller/service/projet.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = environment.baseUrl + 'client/'
  private _client = new Client();
  private _clients = new Array<Client>(); 
  private i=-1;
  private _popUpSave = false;
  private _popUpUpdate = false;

  constructor(private http: HttpClient,private router: Router) { }

  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get clients(): Array<Client> {
    if (this._clients == null) {
      this._clients = new Array<Client>();
    }
    return this._clients;
  }
  get popUpUpdate(): boolean {
    return this._popUpUpdate;
  }

  set popUpUpdate(value: boolean) {
    this._popUpUpdate = value;
  }

  set projets(value: Array<Client>) {
    this._clients = value;
  }
  get popUpSave(): boolean {
    return this._popUpSave;
  }

  set popUpSave(value: boolean) {
    this._popUpSave = value;
  }

  private cloneClient(client: Client) {
    const cloneClient = new Client();
    cloneClient.id = client.id;
    cloneClient.nom = client.nom;
    cloneClient.prenom = client.prenom;
    cloneClient.email = client.email;

    return cloneClient;
  }

  public findByEmailAndPsw(code,psw) {

    this.http.get<Client>(this.url+'email/'+code+'/psw/'+psw).subscribe(
      data=>{
        if (data == null) {
          alert("Email or password incorrect");
        }else{
          this.client = data;
          localStorage.setItem('currentUser', code);
          const user = localStorage.getItem('currentUser');
          // this.projetService.user = localStorage.getItem('currentUser');
          console.log(user);
          this.router.navigate(['../']);
          setTimeout(function(){ location.reload(); }, 300);
          // location.reload();
        }

      }
    );
  }
  public findByEmail(code) {

    this.http.get<Client>(this.url+'email/'+code).subscribe(
      data=>{
        if (data == null) {
          // alert("Email incorrect");
        }else{
          this.client = data;
        }

      }
    );
  }
  update(nom: string, prenom: string,email: string ,psw: string) {
    var newEmail :string = 'newEmail='+email;
    var newNom :string = '&nom='+nom;
    var newPrenom :string = '&prenom='+prenom;
    var newPsw :string = '&avancement='+psw;
    var oldEmail = localStorage.getItem('currentUser');

      this.http.put(this.url+'email/'+oldEmail+'/nom/{nom}/prenom/{prenom}/psw/{psw}?'+newNom+newPrenom+newPsw,'').subscribe(
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
  public save(email: string, nom: string,prenom: string ,psw: string) {
    if(email == null || email == ""){
      alert("Remplires le champ email");
    }else if(nom == null || nom == ""){
      alert("Remplires le champ nom");
    }
    else if(prenom == null || prenom == ""){
      alert("Remplires le champ prenom");
    }
    else if(psw == null || psw == ""){
      alert("Remplires le champ password");
    }
    else{
      const c = new Client();
      c.email = email;
      c.nom = nom;
      c.prenom = prenom;
      c.psw = psw;
      this.http.post(this.url+'/', c).subscribe(
        data => {
          if (data > 0) {
          } else {
            alert("Email Nom deja Exist!");
          }
        }, error => {
          alert('Etat post error == ' + error.message);
        }
      );
      // @ts-ignore
      // this.societe = null;
    }
  }
}
