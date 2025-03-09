import {
  HttpErrorResponse, HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GlobalRequestInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
  ) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const header = new HttpHeaders({
      });
      const cloneReq = req.clone({
        headers: header
      });
      return next.handle(cloneReq).pipe(
        catchError( err => {
          if (err.status === 401) {
            console.log('Unauthorized');
          }
          return this.manageError(err);
        })
      );
    // return next.handle(req).pipe(
    //   catchError( err => this.manageError(err))
    // );
  }
  manageError(err: HttpErrorResponse) {
    return throwError(err);
  }
}
