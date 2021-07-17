import {Artist} from './artist';

export interface Event {
  offers: [
    {
      'type': string,
      'url': string,
      'status': string
    }
  ];
  venue: {
    name: string,
    country: string,
    region: string,
    city: string,
    latitude: string,
    longitude: string
  };
  datetime: string;
  artist: Artist;
  on_sale_datetime: string;
  description: string;
  lineup: [
    string
  ];
  id: string;
  title: string;
  artist_id: string;
  url: string;
}
