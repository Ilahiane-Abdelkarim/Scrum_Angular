import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './view/categories/categories.component';
import { ClientsComponent } from './view/clients/clients.component';
import { CollaborateursComponent } from './view/collaborateurs/collaborateurs.component';
import { EquipesComponent } from './view/equipes/equipes.component';
import { EtatTachesComponent } from './view/etat-taches/etat-taches.component';
import { LotsComponent } from './view/lots/lots.component';
import { MembreEquipesComponent } from './view/membre-equipes/membre-equipes.component';
import { ProjetsComponent } from './view/projets/projets.component';
import { TachesComponent } from './view/taches/taches.component';
import { HomeComponent } from './view/pages/home/home.component';
import { NotFoundComponent } from './view/pages/not-found/not-found.component';

export const compoments = [ProjetsComponent,ClientsComponent,CategoriesComponent,CollaborateursComponent,EquipesComponent,LotsComponent,TachesComponent,EtatTachesComponent,MembreEquipesComponent];
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'projets-component', component:compoments[0]},
  {path:'clients-component', component:compoments[1]},
  {path:'categories-component', component:compoments[2]},
  {path:'collaborateurs-component', component:compoments[3]},
  {path:'equipes-component', component:compoments[4]},
  {path:'lots-component', component:compoments[5]},
  {path:'taches-component', component:compoments[6]},
  {path:'etat-taches-component', component:compoments[7]},
  {path:'membre-equipes-component', component:compoments[8]},
  {path:'**', component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
