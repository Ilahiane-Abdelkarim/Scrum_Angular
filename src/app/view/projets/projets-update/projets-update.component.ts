import { Component, OnInit } from '@angular/core';
import {ProjetService} from '../../../controller/service/projet.service';
import {Projet} from '../../../controller/model/projet.model';

@Component({
  selector: 'app-projets-update',
  templateUrl: './projets-update.component.html',
  styleUrls: ['./projets-update.component.css']
})
export class ProjetsUpdateComponent implements OnInit {

  constructor(private projetService:ProjetService) { }

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
  get popUpUpdate(): boolean {
    return this.projetService.popUpUpdate;
  }
  set popUpUpdate(p:boolean)  {
    this.projetService.popUpUpdate = p;
  }
  get projet(): Projet {
    return this.projetService.projet;
  }
  set projet(t:Projet)  {
    this.projetService.projet = t;
  }
  get projet2(): Projet {
    return this.projetService.projet2;
  }
  set projet2(t:Projet)  {
    this.projetService.projet2 = t;
  }
  get updateActive(): boolean {
    return this.bo;
  }
  set updateActive(bol:boolean)  {
    this.bo = bol;
  }
  public update(codeV :string,ref :string,libelle :string,avancement :string){
    this.projetService.update(codeV,ref,libelle,avancement,this.clr)
  }
  public delete(){
    this.projetService.delete();
    this.projetService.popUpUpdate = false;
  }
  public getColor(val){
    this.clr = val;
  }
}
