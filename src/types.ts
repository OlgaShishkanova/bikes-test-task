export interface BikeType {
  title: string;
  description: string;
}
export interface BikeTypeData {
  [key: string | number]: BikeType;
}
