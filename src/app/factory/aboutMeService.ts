import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Knowledge } from '../models/knowledge';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class aboutMeService {
    public knowledge: Knowledge;
    private apiUrl = 'api/knowledge';
    constructor(private http: Http) { }
    // getData(): Promise<any> {
    //     return this.http.get(this.apiUrl)
    //         .toPromise()
    //         .then((res) => {
    //             console.log(99)
    //             console.log(res.json())
    //             return res.json()
    //         })
    //         .then((knowledge) =>{ this.knowledge = knowledge })
    //         .catch(this.hendleError);
    // }
    getData(): Observable <any> {
        return this.http.get(this.apiUrl)
            .map((res) => {
                console.log(res.json())
                return res.json()
            })
            .catch(this.hendleError);
    }
    setData(knowledge: Knowledge) {
        return this.http.post(this.apiUrl, knowledge)
            .map((res) => {
                console.log(res.json())
                return res.json()
            })
            .catch(this.hendleError);
    };
    private hendleError(error: any) {
        console.log('errrr' + error)
        return Observable.throw(error.message || error)
    }
}