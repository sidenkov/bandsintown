import {Artist} from './artist';

export interface Event {
  'offers': [
    {
      'type': string,
      'url': string,
      'status': string
    }
  ];
  'venue': {
    'name': string,
    'country': string,
    'region': string,
    'city': string,
    'latitude': string,
    'longitude': string
  };
  'datetime': string;
  // 'artist': Artist;
  'artist': {
    'thumb_url': string;
    'mbid': string;
    'support_url': string;
    'facebook_page_url': string;
    'image_url': string;
    'name': string;
    'options': {
      'display_listen_unit': boolean;
    };
    'id': string;
    'tracker_count': number;
    'upcoming_event_count': number;
    'url': string;
  };
  'on_sale_datetime': string;
  'description': string;
  'lineup': [
    string
  ];
  'id': string;
  'title': string;
  'artist_id': string;
  'url': string;
}
