'use client'
import Checkout from '@/components/product details/checkout/Checkout'
import React, { useEffect, useState } from 'react';
import style from  './style.module.css'
import Link from 'next/link';
export default function page({params}) {


  return (

    <>
  
     <Checkout productId={params.productId} userID={params.userId}/>
    </>
  )
}
