import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../controller/service/client.service';
import {ProjetService} from '../../controller/service/projet.service';
import {Client} from '../../controller/model/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private clientService:ClientService,private projetService:ProjetService) { }

  ngOnInit(): void {
    this.clientService.findByEmail(this.projetService.user);
  }
  get client(): Client {
    return this.clientService.client;
  }
  get popUpUpdate(): boolean {
    return this.clientService.popUpUpdate;
  }
  set popUpUpdate(p:boolean)  {
    this.clientService.popUpUpdate = p;
  }


}
