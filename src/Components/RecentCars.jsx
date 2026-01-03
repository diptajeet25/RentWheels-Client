import React,{useState} from 'react'
import Card from './Card'

const RecentCars=({latestCars})=>{
const [cars,setCars]=useState(latestCars)
return(
<div>
<h2 className='text-3xl lg:text-4xl font-bold text-center mt-24 mb-6 text-base-content'>Recent <span className='text-primary'>Cars</span></h2>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-3 w-[90%] mx-auto'>
{cars.map((car,i)=><Card key={i} car={car}/>)}
</div>
</div>
)
}
export default RecentCars
