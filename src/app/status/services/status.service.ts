import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private readonly API = 'api/getStatusAtualPorEstado/PR';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Status[]> {
    return this.httpClient.get<Status[]>(this.API);
  }
}
