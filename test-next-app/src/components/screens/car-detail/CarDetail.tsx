import Layout from '@/components/layout/Layout'
import CarItem from '@/components/ui/car/CarItem'
import { ICarDataSingle } from '@/interfaces/car.interface'
import React, { FC } from 'react'

type Props = {}

const CarDetail:FC<ICarDataSingle> = ({car}) => {
  return (
    <Layout title={car.name} description="good car" >
        <CarItem car={car} />
    </Layout>
  )
}

export default CarDetail