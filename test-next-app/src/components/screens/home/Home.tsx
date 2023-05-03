import React, { FC } from 'react'
import styles from  './Home.module.scss';
import Layout from '@/components/layout/Layout';
import { ICarData } from '@/interfaces/car.interface';
import CarItem from '@/components/ui/car/CarItem';

const Home:FC<ICarData> = ({cars}) => {
  return (
    <Layout title="Home Page" description="sale cars">
        <div className={styles.HomeBody}>Hello World</div>
        {cars.length ? cars.map((car,ind)=><CarItem key={ind} car={car} />) : <div>Cars not found</div>}
    </Layout>
  )
}

export default Home