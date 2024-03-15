import AdressForm from '@/components/profile/address/AdressForm'
import React from 'react'

export default function page({ params: {id} }) {
  return (
    <div>
      <AdressForm  sellerID={id}/>
    </div>
  )
}
