import HomePage from '@/src/screens/home/Home';
import { ICarData } from '@/src/types/car.interface';
import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

import { CarService } from '@/src/services/car.servise';

const Home: NextPage<ICarData> = ({ cars }) => {
  return <HomePage cars={cars} />;
};

export const getStaticProps: GetStaticProps<ICarData> = async () => {
  const cars = await CarService.getAll();

  return {
    props: { cars },
    revalidate: 60,
  };
};

// export const getServerSideProps: GetServerSideProps<ICarData> = async () => {
//   const cars = await CarService.getAll();

//   return {
//     props: { cars },
//   };
// };

export default Home;
