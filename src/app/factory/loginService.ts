import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class loginService {
    user: User;
    private apiUrl = 'api/login';
    constructor(private http: Http) { }

    // getAll() {
    //     return this.http.get(this.apiUrl)
    //     .toPromise()
    //     .then((res) =>{
    //         console.log(res.json())
    //         return res.json()})
    //     // .then(user => this.user = user)
    //     .catch(this.hendleError);
    // }
 
    // getById(id: number) {
    //     return this.http.get(this.apiUrl + id)
    //     .toPromise()
    //     .then((res) =>{
    //         console.log(res.json())
    //         return res.json()})
    //     .catch(this.hendleError);
    // }

    login(user: User) {
        return this.http.post(this.apiUrl, user)
        .toPromise()
        .then((res) =>{
            // console.log(res.json())
            return res.json()})
        // .then(user => this.user = user)
        .catch(this.hendleError);
    }

    // update(user: User) {
    //     return this.http.put(this.apiUrl + user.id, user, )
    //     .toPromise()
    //     .then((res) =>{
    //         console.log(res.json())
    //         return res.json()})
    //     .catch(this.hendleError);
    // }

    // delete(id: number) {
    //     return this.http.delete(this.apiUrl + id)
    //     .toPromise()
    //     .then((res) =>{
    //         console.log(res.json())
    //         return res.json()})
    //     .catch(this.hendleError);
    // }

    // // private helper methods
      private hendleError(error: any){
        console.log('errrr'+error)
        return Promise.reject(error.message || error)
    }
}