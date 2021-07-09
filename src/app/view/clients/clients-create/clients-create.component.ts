import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../controller/service/client.service'
import {Client} from '../../../controller/model/client.model';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.css']
})
export class ClientsCreateComponent implements OnInit {

  constructor(private clientService : ClientService) { }


  ngOnInit(): void {
  }
  private _colors : { ref: string, code: string }[]= 
  [{ref:"purple",code:"673ab7"},{ref:"blue",code:"2196f3"},{ref:"green",code:"009688"},{ref:"orange",code:"f57f17"}];
  get colors(): Array<Object> {
    return this._colors;
  }
  private bo:boolean = true;
  private clr:string = "f";
  // private colorselected:boolean = true;
  get popUpSave(): boolean {
    return this.clientService.popUpSave;
  }
  set popUpSave(p:boolean)  {
    this.clientService.popUpSave = p;
  }
  get client(): Client {
    return this.clientService.client;
  }
  set client(t:Client)  {
    this.clientService.client = t;
  }
  get updateActive(): boolean {
    return this.bo;
  }
  set updateActive(bol:boolean)  {
    this.bo = bol;
  }
  public save(email :string,nom :string,prenom :string,psw :string){
    this.clientService.save(email,nom,prenom,psw);
    this.clientService.popUpSave = false;
  }

}
