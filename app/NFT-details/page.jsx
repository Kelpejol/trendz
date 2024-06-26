import React from 'react'


// INTERNAL IMPORT
import { Button, Category, Brand } from "../../components/componentsindex";
import NFTDetailsPage from '@/NFTDetailsPage/NFTDetailsPage';
const page = () => {
  return (
    <div>
      <NFTDetailsPage/>
      <Category/>
      <Brand/>
    </div>
  )
}

export default page
