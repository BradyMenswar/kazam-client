export interface BasicInfo {
  name: string;
  type: string[];
  tera: string;
  item: string;
  ability: string;
  nature: string;
}

export interface TeraObject {
  [key: string]: string;
}
