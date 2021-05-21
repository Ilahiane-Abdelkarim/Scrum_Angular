import {Categorie} from './categorie.model';
import {Projet} from './projet.model';
export class Lot {
    public id:number ;

    public code:string ;

    public libelle:string ;

    public projet:Projet ;

    public categorie:Categorie ;
}
