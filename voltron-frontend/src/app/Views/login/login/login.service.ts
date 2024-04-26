import { environment } from 'src/environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = `${environment.baseUrl}`
  constructor(private httpClient: HttpClient,
    private router: Router
  ) { }

  loginUser(login: any) {
    return this.httpClient.post<any>(`${this.baseUrl}/Login`, login);
  }
}
