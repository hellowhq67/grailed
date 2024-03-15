import Sold from '@/components/product details/Sold'


export default function page({ params: { _id} }) {
  return (
    <div>

    <Sold productId={_id}/>
      
    </div>
  )
}
