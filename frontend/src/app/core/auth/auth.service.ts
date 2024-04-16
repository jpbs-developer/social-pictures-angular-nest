import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SignCredentials, SignResponse } from './auth';
import { Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';
import { UsersService } from './users.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly usersService = inject(UsersService);
  private readonly storageService = inject(StorageService);
  signin({ username, password }: SignCredentials): Observable<SignResponse> {
    return this.httpClient
      .post<SignResponse>(`${environment.api}/sessions`, {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          this.storageService.saveToken(response.token);
          this.usersService.decodeAndNotify();
        })
      );
  }
}
