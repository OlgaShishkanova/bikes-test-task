export interface BikeType {
  title: string;
  description: string;
  img: string;
}
export interface BikeTypeData {
  [key: string | number]: BikeType;
}
