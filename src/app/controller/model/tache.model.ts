import {EtatTache} from './etat-tache.model';
import {Projet} from './projet.model';

export class Tache {
    public id:number;
    public libelle:string;
    public code:string;
    public datedebut:Date;
    public datefin:Date;
    public etat:EtatTache;
    public projet:Projet;
}
