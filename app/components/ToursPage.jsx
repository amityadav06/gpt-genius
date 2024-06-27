'use client'
import { useQuery } from '@tanstack/react-query'
import {ToursList} from './ToursList'
import React from 'react'
import { getAllTours } from '../utils/action'

const ToursPage = () => {
    const {data, isPending} = useQuery({
        queryKey: ['tours'],
        queryFn: () => getAllTours(),
    })
  return (
    <>
       {isPending ? <span className='loading'></span> : <ToursList data={data} />} 
    </>
  )
}

export default ToursPage