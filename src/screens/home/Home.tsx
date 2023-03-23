import { ICarData } from '@/src/types/car.interface';
import CarItem from '@/src/ui/car/CarItem';
import { NextPage } from 'next';

const HomePage: NextPage<ICarData> = ({ cars }) => {
  return (
    <section>
      <div className="container">
        <div>
          {cars.length ? (
            cars.map((car) => <CarItem car={car} key={car.id} />)
          ) : (
            <div>Автомобилей нету</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
