import { Injectable, inject } from '@angular/core';
import { StorageService } from './storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly storageService = inject(StorageService);
  helper = new JwtHelperService();
  decodeAndNotify() {
    const token = this.storageService.getToken();
    const user = this.helper.decodeToken(token);
    console.log(user);
  }
}
