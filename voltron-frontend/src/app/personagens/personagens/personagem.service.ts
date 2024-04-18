import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personagem } from 'src/app/Models/Personagem';
import { ServiceResponse } from 'src/app/Models/ServiceResponse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

baseUrl = `${environment.baseUrl + 'api/personagem'}`

constructor(private http: HttpClient) { }

    getAll(): Observable<ServiceResponse<Personagem[]>>{
      return this.http.get<ServiceResponse<Personagem[]>>(`${this.baseUrl}`);
    }
}
