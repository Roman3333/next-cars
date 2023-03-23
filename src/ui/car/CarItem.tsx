import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import styles from './carItem.module.scss';
import { ICarDataSingle } from '@/src/types/car.interface';

const CarItem: NextPage<ICarDataSingle> = ({ car }) => {
  return (
    <div className={styles.car}>
      <div className={styles.carImageBox}>
        <Image src={car.img} alt={car.name} width={500} height={300} />
      </div>
      <div className={styles.carTitle}>{car.name}</div>
      <div className={styles.carPrice}>{car.price}</div>
      <Link className={styles.carLink} href={`/cars/${car.id}`}>
        Read more
      </Link>
    </div>
  );
};

export default CarItem;
