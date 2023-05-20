import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  isOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get sideBarState(): Observable<boolean> {
    return this.isOpen.asObservable();
  }

  changeState() {
    let currentValue = this.isOpen.getValue();
    this.isOpen.next(!currentValue);
  }
}
