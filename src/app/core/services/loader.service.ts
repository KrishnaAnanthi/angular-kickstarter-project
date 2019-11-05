//Serivce to show and hide the loader before and after http request fires. Set show to true or false.
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderState} from '@shared/models/loader';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();
  constructor() {}
  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
