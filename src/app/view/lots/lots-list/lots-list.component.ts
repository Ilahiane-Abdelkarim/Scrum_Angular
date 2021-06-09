import { Component, OnInit } from '@angular/core';
import {Lot} from '../../../controller/model/lot.model';
import {LotService} from '../../../controller/service/lot.service';

@Component({
  selector: 'app-lots-list',
  templateUrl: './lots-list.component.html',
  styleUrls: ['./lots-list.component.css']
})
export class LotsListComponent implements OnInit {

  constructor(private lotService:LotService) { }

  ngOnInit(): void {
  }
  get lots(): Array<Lot> {
    return this.lotService.lots;
  }

}
