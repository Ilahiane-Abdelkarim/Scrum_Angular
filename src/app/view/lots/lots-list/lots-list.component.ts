import { Component, OnInit } from '@angular/core';
import {Lot} from '../../../controller/model/lot.model';
import {LotService} from '../../../controller/service/lot.service';
import {TacheService} from '../../../controller/service/tache.service';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-lots-list',
  templateUrl: './lots-list.component.html',
  styleUrls: ['./lots-list.component.css']
})
export class LotsListComponent implements OnInit {

  constructor(private service:LotService, private route: ActivatedRoute, private tacheService:TacheService) { }

  ngOnInit(): void {
const routeParams = this.route.snapshot.paramMap;
const projetIdFromRoute = String(routeParams.get('projetId'))
  this.findByProjetCode(projetIdFromRoute);
  // console.log(projetIdFromRoute);
  // console.log(this.service.lots)
  }
  get lots(): Array<Lot> {
    return this.service.lots;
  }
  findByProjetCode(i){
    this.service.findByProjetCode(i);    
  }

}
