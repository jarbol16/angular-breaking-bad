import {Injectable} from "@angular/core";
import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private _http: HttpClient) {}

    invocarApi(method: String) : Observable<any> {
        return this._http.get<any>(`${environment.apiUrl}${method}`);
    }
}