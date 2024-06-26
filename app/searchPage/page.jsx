import React from 'react'


// INTERNAL IMPORT
import Style from "./searchPage.module.css";
import { Slider, Brand, Filter } from '@/components/componentsindex';
import { SearchBar } from "../../SearchPage/SearchPageIndex";
import { NFTCardTwo, Banner } from '@/collectionPage/CollectionIndex';
import images from "../../public/Image"
const page = () => {

    const collectionArray = [
        images.nft_images_1,
        images.nft_image_2,
        images.nft_images_3,
        images.nft_images_1,
        images.nft_image_2,
        images.nft_images_3,
        images.nft_images_1,
        images.nft_image_2,
        images.nft_images_3
    ]
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2}/>
      <Filter/>
      <NFTCardTwo NFTData={collectionArray}/>
      <SearchBar/>
      <Slider/>
      <Brand/>
    </div>
  )
}

export default page
