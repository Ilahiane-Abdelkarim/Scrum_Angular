import { Component, OnInit } from '@angular/core';
import {Projet} from '../../../controller/model/projet.model';
import {ProjetService} from '../../../controller/service/projet.service';
import {Client} from '../../../controller/model/client.model';
import {ClientService} from '../../../controller/service/client.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-projet-detail',
  templateUrl: './projet-detail.component.html',
  styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {

  constructor(private service:ProjetService,private serviceClient:ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.findByClientEmail();
      // First get the projet id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const projetIdFromRoute = String(routeParams.get('projetId'));
  // console.log(projetIdFromRoute);
    this.findByCode(projetIdFromRoute);
  }
  get projet(): Projet {
    return this.service.projet;
  }

  get client(): Client {
    return this.serviceClient.client;
  }
  set openProjetList(value: boolean) {
    this.service.openProjetList = value;
  }
  findByCode(i){
    this.openProjetList = false;
    this.service.findByCode2(i);
  }

}
