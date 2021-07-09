import { Component, OnInit } from '@angular/core';
import {Client} from '../../../controller/model/client.model';
import {ClientService} from '../../../controller/service/client.service';
import {ProjetService} from '../../../controller/service/projet.service';

@Component({
  selector: 'app-clients-update',
  templateUrl: './clients-update.component.html',
  styleUrls: ['./clients-update.component.css']
})
export class ClientsUpdateComponent implements OnInit {

  constructor(private clientService:ClientService,private projetService:ProjetService) { }
  private bo:boolean = true;


  ngOnInit(): void {
    this.clientService.findByEmail(this.projetService.user);
  }
  get client(): Client {
    return this.clientService.client;
  }
  public update(nom :string,prenom :string,email :string,psw :string){
    this.clientService.update(nom,prenom,email,psw)
  }
  get popUpUpdate(): boolean {
    return this.clientService.popUpUpdate;
  }
  set popUpUpdate(p:boolean)  {
    this.clientService.popUpUpdate = p;
  }
  get updateActive(): boolean {
    return this.bo;
  }
  set updateActive(bol:boolean)  {
    this.bo = bol;
  }

}
