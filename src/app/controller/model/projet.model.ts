import {Client} from './client.model';
export class Projet {

    public id:number;
    public ref:string;
    public libelle:string;
    public code:string;
    public client:Client;
    public avancement:string;
    public color:string;
}
