import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';
@Component({templateUrl : './movies.component.html'})
export class MoviesComponent  {
    public movies :  any[];
    public movie : any = {};
    public total_pages : any = [];
    public page : number;
    public searchMovie : string;
    private strBuilder : string;

    constructor(private httpService : AppHttpService){
        this.page = 1;
        this.strBuilder = "top_rated";
        this.searchMovie = '';
    }
    ngOnInit(){
        this.list();
    }
    list() {
        this.httpService.builder(this.strBuilder, this.page,0,this.searchMovie)
        .list().then((res) => {
                this.movies = res.results.sort((a,b) => {
                    return a.vote_count - b.vote_count;                    
                }).sort((a,b) => {
                    return a.id - b.id;
                });
                this.pages(res.total_pages);
        })
    }
    paginate(page){
        this.page = page;
        this.list();
    }
    pages(total_pages){
            this.total_pages = [];
            for(let i = 0 ; i < total_pages ; i++){
                this.total_pages.push(i+1);            
            }
    }
    search(movie_name){
        if(movie_name){
            this.strBuilder = 'search';     
            this.searchMovie = movie_name;            
        }else{
            this.strBuilder = 'top_rated';
        }
        this.list();
    }
}