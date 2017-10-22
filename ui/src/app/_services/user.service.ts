import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/user/all').map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/user/register', user);
    }

}