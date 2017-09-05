import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({templateUrl : './movies.view.component.html'})

export class MoviesViewComponent {
    public movie : any = {};
    constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.params
            .subscribe((params: any) => {
                this.view(params.id);
            });
    }
    view(id: number) {
        this.httpService.builder('find', 0, id)
            .list()
            .then((res) => {
                this.movie = res;
            })
    }
}