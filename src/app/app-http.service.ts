import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class AppHttpService {
    private url :  string;
    private auth : string;

    constructor(private http:Http){
        this.auth = '?api_key=b9a6c148fd0587d013ae0314e7cf3f0e&language=pt-BR&external_source=imdb_id';
    }

    builder(resource: string, page=1, movieId? : number, movie_name? : string) {
        this.url = 'https://api.themoviedb.org/3/movie/' + resource;
        switch(resource) {
            case 'find':
                if(movieId) {
                    this.url = 'https://api.themoviedb.org/3/movie/'+movieId;
                                }
            break;
            case 'search':
                this.url = 'https://api.themoviedb.org/3/search/movie';
            break;
        }
        this.url += this.auth;
        if(resource === 'top_rated' || resource === 'search'){
            this.url += "&page="+page;
            if(resource === 'search' && movie_name){
                this.url += "&query="+movie_name;
            }
        }
        
        return this;
    }


    list () {
        return this.http.get(this.url)
            .toPromise()
            .then((res) => {
                return res.json() || {};
            })
    }
}