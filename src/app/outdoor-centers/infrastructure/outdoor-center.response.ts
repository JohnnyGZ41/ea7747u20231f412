export interface OutdoorCenterResource {
  id:           string;
  name:         string;
  activityType: string;
  capacity:     string;
  latitude:     string;
  longitude:    string;
}
export type OutdoorCenterResponse = OutdoorCenterResource[];
