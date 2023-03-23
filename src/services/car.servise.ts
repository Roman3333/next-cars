import axios from 'axios';

const API_URL = 'http://localhost:3001';

axios.defaults.baseURL = API_URL;

import { ICar } from '../types/car.interface';

export const CarService = {
  async getAll() {
    const { data } = await axios.get<ICar[]>('/cars');
    return data;
  },

  async getById(id: string) {
    const { data } = await axios.get<ICar[]>('/cars', {
      params: {
        id,
      },
    });
    return data[0];
  },
};
