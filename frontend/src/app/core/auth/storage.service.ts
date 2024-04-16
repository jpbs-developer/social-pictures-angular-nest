import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class StorageService {
  getToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  saveToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  hasToken(): boolean {
    return !!this.getToken();
  }
}
