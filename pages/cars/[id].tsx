import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';

import CarDetailPage from '@/src/screens/carDetailPage/Car';
import { CarService } from '@/src/services/car.servise';
import { ICarDataSingle } from '@/src/types/car.interface';

const CarDetail: NextPage<ICarDataSingle> = ({ car }) => {
  return <CarDetailPage car={car} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const cars = await CarService.getAll();

  return {
    paths: cars.map((car) => ({
      params: {
        id: car.id.toString(),
      },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<ICarDataSingle> = async ({ params }) => {
  console.log(params);

  const car = await CarService.getById(String(params?.id));

  return {
    props: { car },
    revalidate: 60,
  };
};

export default CarDetail;
