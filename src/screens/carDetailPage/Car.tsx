import { ICarDataSingle } from '@/src/types/car.interface';
import CarItem from '@/src/ui/car/CarItem';
import { NextPage } from 'next';

const CarDetailPage: NextPage<ICarDataSingle> = ({ car }) => {
  return (
    <section>
      <div className="container">
        <CarItem car={car} />
      </div>
    </section>
  );
};

export default CarDetailPage;
