import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PepoleComponent } from './pepole/pepole.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'',redirectTo:'/register',pathMatch:'full'},

  {path:'register',component:RegisterComponent,pathMatch:'full'},

  {path:'login',component:LoginComponent,pathMatch:'full'},

  {path:'home',canActivate:[AuthGuard], component:HomeComponent,pathMatch:'full'},
  

  {path:'movies',canActivate:[AuthGuard], component:MoviesComponent,pathMatch:'full'},
  {path:'tv',canActivate:[AuthGuard], component:TvComponent,pathMatch:'full'},
  {path:'pepole',canActivate:[AuthGuard], component:PepoleComponent,pathMatch:'full'},
  {path:'details/:type/:id',canActivate:[AuthGuard], component:MediaDetailsComponent,pathMatch:'full'},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
