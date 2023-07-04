import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private variable: BehaviorSubject<string> = new BehaviorSubject<string>('valor inicial');

  getVariable() {
    return this.variable.asObservable();
  }

  setVariable(value: string) {
    this.variable.next(value);
  }
}
