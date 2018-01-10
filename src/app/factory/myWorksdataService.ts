import { myProjects } from '../models/myProjects';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
@Injectable()
export class myWorksdataService {
    myWorksdata: any;
    private apiUrl = 'api/myProjects'
    constructor(private http: Http) {

    }

    getData(): Observable <any> {
        return this.http.get(this.apiUrl)
            .map((res) => {
                // console.log(res.json())
                return res.json()
            })
            // .then(myWorksdata => this.myWorksdata = myWorksdata)
            .catch(this.hendleError);
    }
    setData(dt) {
        let headers = new Headers({ 'Content--Type': 'aplication/json' });
        let options = new RequestOptions({ headers });
        this.myWorksdata = dt;
        this.http.post(this.apiUrl, dt, options)
            .map(res => {
                return res.json()
            })
            .catch(this.hendleError)
    };
    private hendleError(error: any) {
        console.log('errrr' + error)
        return Observable.throw(error.message || error)
    }
}