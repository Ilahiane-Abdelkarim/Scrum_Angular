import {EtatTache} from './etat-tache.model';
import {MembreEquipe} from './membre-equipe.model';
import {Lot} from './lot.model';

export class Tache {
    public id:number;
    public libelle:string;
    public datedebut:Date;
    public datefin:Date;
    public etat:EtatTache;
    public membreEquipe:MembreEquipe;
    public lot:Lot;
}
