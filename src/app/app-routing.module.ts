import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { MainComponent } from 'src/app/main/main.component';
import { CategoryComponent } from 'src/app/category/category.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AddFilmComponent } from 'src/app/add-film/add-film.component';

const routes: Routes = [
{path: "", component: MainComponent},
{path:"login", component:LoginComponent},
{path:"drama", component:CategoryComponent},
{path:"sci-fi", component:CategoryComponent},
{path:"horror", component:CategoryComponent},
{path:"action", component:CategoryComponent},
{path:"admin", component:AdminComponent},
{path:"addfilm", component:AddFilmComponent}


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
