import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Leader } from '../shared/leader';
import { resolve } from 'url';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]>{
    return of(LEADERS).pipe(delay(2000));
  }

  getLeader(id: string){
    return LEADERS.filter((leader) => (leader.id === id))[0]
  }

  getFeaturedLeader(): Observable<Leader> {
    
    return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(2000));
  }
}
