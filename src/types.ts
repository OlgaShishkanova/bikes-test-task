export interface BikeType {
  title: string;
  description: string;
  img: string;
}
export interface BikeTypeData {
  [key: string | number]: BikeType;
}
export interface BikeItemType {
  id: string;
  bikeType: string;
  name: string;
  img: string;
  desc: string;
  price: number;
  currency: string;
  configuration: BikeItemConfiguration;
}
interface BikeItemConfiguration {
  frame: string;
  color: string;
  brakes: string;
  saddle: string;
}
