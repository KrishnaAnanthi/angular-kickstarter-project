import { Injectable, OnDestroy } from "@angular/core";
import { ApiResources } from "@constants/constant";
import { ApiService } from "@core/http/api.service";
import { takeUntil, retry } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
//this can be custom service which uses apiservice for rest calls.. rename to proper service name
export class WebService implements OnDestroy {
  destroy$ = new Subject<boolean>();

  constructor(private apiService: ApiService) {}

  /* attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<User> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }

  getAllNodes() {
    this.apiService
      .get(ApiResources.NODES)
      .pipe(
        retry(3),
        takeUntil(this.destroy$),
      )
      .subscribe(
        nodesResponse => {
          this.nodes = nodesResponse['nodes'];
        },
        error => {
          console.log('Error fetching non profinet flag');
        },
      );
  }
*/ ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
    this.destroy$.complete();
  }
}
