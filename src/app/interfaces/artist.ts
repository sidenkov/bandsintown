export interface Artist {
  thumb_url: string;
  mbid: string;
  support_url: string;
  facebook_page_url: string;
  image_url: string;
  name: string;
  options: {
    'display_listen_unit': boolean;
  };
  id: string;
  tracker_count: number;
  upcoming_event_count: number;
  url: string;
}

