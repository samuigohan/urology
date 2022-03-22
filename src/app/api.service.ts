import { of as observableOf, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) {
    }

    // pageUrl example: 'kidneys/cancer'
    public getPage(pageUrl: string) {
        return this.http.get(`assets/html/${pageUrl}.html`, {responseType: 'text'});
    }

}
