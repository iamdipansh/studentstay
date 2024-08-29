'use client'
import Listing from '@/components/utilities/Listings/Listing'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Product = ({data}) => {
  // console.log("hii")
  // console.log(data)
  // const [data, setData] = useState([])
  // useEffect(()=>{
  //   getListing();
  // },[])

  // async function getListing(){
  //   const response = await axios.get('api/posts')
  //   const data =  response.data;
  //   console.log(".........")
  //   console.log(data)
  //   console.log(".........")
  //   setData(data)
  // }
  return (
    <div className='basis-3/4   rounded-xl border-[#e0e0e0]'>
      {data.map( (item, indx)=>(<Listing key={indx} item={item}/>)  )} 
    </div>
  )
}

export default Product