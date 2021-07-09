import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './view/projets/projets.component';
import { ProjetsCreateComponent } from './view/projets/projets-create/projets-create.component';
import { ProjetsListComponent } from './view/projets/projets-list/projets-list.component';
import { ClientsComponent } from './view/clients/clients.component';
import { ClientsCreateComponent } from './view/clients/clients-create/clients-create.component';
import { ClientsListComponent } from './view/clients/clients-list/clients-list.component';
import { CategoriesComponent } from './view/categories/categories.component';
import { CategoriesCreateComponent } from './view/categories/categories-create/categories-create.component';
import { CategoriesListComponent } from './view/categories/categories-list/categories-list.component';
import { CollaborateursComponent } from './view/collaborateurs/collaborateurs.component';
import { CollaborateursCreateComponent } from './view/collaborateurs/collaborateurs-create/collaborateurs-create.component';
import { CollaborateursListComponent } from './view/collaborateurs/collaborateurs-list/collaborateurs-list.component';
import { EquipesComponent } from './view/equipes/equipes.component';
import { EquipesCreateComponent } from './view/equipes/equipes-create/equipes-create.component';
import { EquipesListComponent } from './view/equipes/equipes-list/equipes-list.component';
import { LotsComponent } from './view/lots/lots.component';
import { LotsCreateComponent } from './view/lots/lots-create/lots-create.component';
import { LotsListComponent } from './view/lots/lots-list/lots-list.component';
import { EtatTachesComponent } from './view/etat-taches/etat-taches.component';
import { EtatTachesCreateComponent } from './view/etat-taches/etat-taches-create/etat-taches-create.component';
import { EtatTachesListComponent } from './view/etat-taches/etat-taches-list/etat-taches-list.component';
import { TachesComponent } from './view/taches/taches.component';
import { TachesCreateComponent } from './view/taches/taches-create/taches-create.component';
import { TachesListComponent } from './view/taches/taches-list/taches-list.component';
import { MembreEquipesComponent } from './view/membre-equipes/membre-equipes.component';
import { MembreEquipesCreateComponent } from './view/membre-equipes/membre-equipes-create/membre-equipes-create.component';
import { MembreEquipesListComponent } from './view/membre-equipes/membre-equipes-list/membre-equipes-list.component';
import { HomeComponent } from './view/pages/home/home.component';
import { NotFoundComponent } from './view/pages/not-found/not-found.component';
import { MenuHeaderComponent } from './view/menus/menu-header/menu-header.component';
import { LoginComponent } from './view/pages/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjetDetailComponent } from './view/projets/projet-detail/projet-detail.component';
import { TachesUpdateComponent } from './view/taches/taches-update/taches-update.component';
import { ProjetsUpdateComponent } from './view/projets/projets-update/projets-update.component';
import { ClientsUpdateComponent } from './view/clients/clients-update/clients-update.component';

export const projetsComponents = [ProjetsComponent,ProjetsCreateComponent,ProjetsListComponent];
export const clientsComponent = [ClientsComponent,ClientsCreateComponent,ClientsListComponent];
export const categoriesComponent = [CategoriesComponent,CategoriesCreateComponent,CategoriesListComponent];
export const collaborateursComponent = [CollaborateursComponent,CollaborateursCreateComponent,CollaborateursListComponent];
export const equipesComponent = [EquipesComponent,EquipesCreateComponent,EquipesListComponent];
export const lotsComponent = [LotsComponent,LotsCreateComponent,LotsListComponent];
export const tachesComponent = [TachesComponent,TachesCreateComponent,TachesListComponent];
export const etatTachesComponent = [EtatTachesComponent,EtatTachesCreateComponent,EtatTachesListComponent];
export const membreEquipesComponent = [MembreEquipesComponent,MembreEquipesCreateComponent,MembreEquipesListComponent];

@NgModule({
  declarations: [
    AppComponent,
    projetsComponents,
    clientsComponent,
    categoriesComponent,
    collaborateursComponent,
    equipesComponent,
    lotsComponent,
    tachesComponent,
    etatTachesComponent,
    membreEquipesComponent,
    HomeComponent,
    NotFoundComponent,
    MenuHeaderComponent,
    LoginComponent,
    ProjetDetailComponent,
    TachesUpdateComponent,
    ProjetsUpdateComponent,
    ClientsUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
