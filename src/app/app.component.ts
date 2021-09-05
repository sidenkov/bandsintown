import {Component} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Event} from './interfaces/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  appId = '11';
  title = 'BandsInTown';
  inputValue = '';

  readonly rootUrl = 'https://rest.bandsintown.com';

  upcomingEvents$: Observable<Event[]>;
  pastEvents$: Observable<Event[]>;
  allEvents: any[];

  favouriteCity = 'Who knows';
  upcomingEventsLoaded = false;
  pastEventsLoaded = false;

  inputHandler(event: any): void {
    this.inputValue = event.target.value;
  }

  getAllEvents(): void {
    this.allEvents = [];

    const artist = this.inputValue
      .replace(/\?/gi, '\%253F')
      .replace(/\//gi, '\%252F')
      .replace(/\*/gi, '\%252A')
      .replace(/\\&quot;/gi, '\%27C');

    this.getUpcomingEvents(artist).subscribe((events: any[]) => {
      this.allEvents = this.allEvents.concat(events);
      this.upcomingEventsLoaded = true;
    });

    this.getPastEvents(artist).subscribe((events: any[]) => {
      this.allEvents = this.allEvents.concat(events);
      this.findFavourite();
      this.pastEventsLoaded = true;
    });
  }

  findFavourite(): void {
    const hash = new Map();
    this.allEvents.map((event: any) => {
      const key = `${event.venue.city}, ${event.venue.country}`;
      if (!hash.has(key)) {
        hash.set(key, 1);
      } else {
        hash.set(key, hash.get(key) + 1);
      }
    });
    const result = [...hash.entries()].reduce((acc, e) => e[1] > acc[1] ? e : acc);
    console.log(result);
    this.favouriteCity = result[0];
  }

  getPastEvents(artist: string): Observable<any[]> {
    const params = new HttpParams().set('app_id', this.appId).set('date', 'past');
    const req = this.rootUrl + '/artists/' + artist + '/events';

    return this.pastEvents$ = this.http.get<any[]>(req, {params});
  }

  getUpcomingEvents(artist: string): Observable<any[]> {
    const params = new HttpParams().set('app_id', this.appId).set('date', 'upcoming');
    const req = this.rootUrl + '/artists/' + artist + '/events';

    return this.upcomingEvents$ = this.http.get<any[]>(req, {params});
  }
}

