export interface ICar {
  id: number;
  name: string;
  price: number;
  img: string;
}

export interface ICarData {
  cars: ICar[];
}

export interface ICarDataSingle {
  car: ICar;
}
