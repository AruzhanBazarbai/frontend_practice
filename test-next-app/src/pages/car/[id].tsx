import CarDetail from '@/components/screens/car-detail/CarDetail'
import { ICarData, ICarDataSingle } from '@/interfaces/car.interface'
import { CarService } from '@/services/car.service'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const CarDetailPage:NextPage<ICarDataSingle> = ({car}) => {
    //    /car/1  /car/[id] 
    // const {asPath,pathname} =useRouter()
    
    // const {query}=useRouter() //query.id=1

    // для перенаправления. replace - полностью удаляет историю и заменяет, а push- перенаправляет без перезагрузки
//     const {push, replace}=useRouter() 
//     return (<>
//     <div >CarPage</div>
//     <button onClick={()=>push('/')}>Go Home</button>
//     <button onClick={()=>replace('/')}>Go Home</button>
//   </>)
    
    // console.log(asPath,pathname)
  return (
    <CarDetail car={car} />
    )
}
export const getStaticPaths: GetStaticPaths=async ()=>{

  const cars= await CarService.getAll()
  
  return{
    paths: cars.map(car=>{
      params:{
        is:car.id
      }
    }),
  }
}

export default CarDetailPage