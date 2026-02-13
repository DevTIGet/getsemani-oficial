export interface MapInfo {
  title: string;
  address: string;
  embedUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}
