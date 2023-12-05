"use client"
import Loader from '@/components/Loader';
import ProductContainer from '@/containers/ProductContainer';
import { Suspense } from 'react';

export default function Home() {


  return (
   <main className='px-5'>
    <Suspense fallback={<Loader/>}>
    <ProductContainer/>
    </Suspense>
   </main>
  )
}
