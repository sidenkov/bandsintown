import {Component} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Event} from './interfaces/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  appId = '11';
  title = 'BandsInTown';
  inputValue = '';

  readonly rootUrl = 'https://rest.bandsintown.com';
  upcomingEvents: Observable<Event[]>;
  pastEvents: Observable<Event[]>;

  inputHandler(event: any): void {
    this.inputValue = event.target.value;
  }

  getAllEvents(): void {
    this.getUpcomingEvents();
    this.getPastEvents();
  }

  getPastEvents(): void {
    const params = new HttpParams().set('app_id', this.appId).set('date', 'past');
    const req = this.rootUrl + '/artists/' + this.inputValue + '/events';
    this.pastEvents = this.http.get<Event[]>(req, {params});
  }

  getUpcomingEvents(): void {
    const params = new HttpParams().set('app_id', this.appId).set('date', 'upcoming');
    const req = this.rootUrl + '/artists/' + this.inputValue + '/events';
    this.upcomingEvents = this.http.get<Event[]>(req, {params});
  }
}

