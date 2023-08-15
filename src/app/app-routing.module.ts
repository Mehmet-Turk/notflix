import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { MainComponent } from 'src/app/main/main.component';
import { DramaComponent } from 'src/app/drama/drama.component';
import { SciFiComponent } from 'src/app/sci-fi/sci-fi.component';
import { HorrorComponent } from 'src/app/horror/horror.component';
import { ActionComponent } from 'src/app/action/action.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AddFilmComponent } from 'src/app/add-film/add-film.component';

const routes: Routes = [
{path: "", component: MainComponent},
{path:"login", component:LoginComponent},
{path:"drama", component:DramaComponent},
{path:"sci-fi", component:SciFiComponent},
{path:"horror", component:HorrorComponent},
{path:"action", component:ActionComponent},
{path:"admin", component:AdminComponent},
{path:"addfilm", component:AddFilmComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
