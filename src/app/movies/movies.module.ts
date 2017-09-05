import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { MoviesComponent } from './movies.component';
import { AppHttpService } from '../app-http.service';
import { FormsModule } from '@angular/forms';
import { MoviesViewComponent } from './movies.view.component';

const appRoutes: Routes = [
    {path: 'movies', component: MoviesComponent},
    { path: 'movies/:id', component: MoviesViewComponent },
    
  ];
@NgModule({
    imports : [
        BrowserModule, 
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations:[
        MoviesComponent,
        MoviesViewComponent
    ],
    providers : [AppHttpService]
})


export class MoviesModule {}