export interface IPatch {
  small: string;
  large: string;
}

export interface IReddit {
  campaign: string;
  launch: string;
  media: string;
  recovery?: any;
}

export interface IFlickr {
  small: any[];
  original: string[];
}

export interface ILinks {
  patch: IPatch;
  reddit: IReddit;
  flickr: IFlickr;
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

export interface ICore {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

export interface ILaunch {
  fairings?: any;
  links: ILinks;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  tdb: boolean;
  net: boolean;
  window: number;
  rocket: string;
  success: boolean;
  failures: any[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: ICore[];
  id: string;
}
