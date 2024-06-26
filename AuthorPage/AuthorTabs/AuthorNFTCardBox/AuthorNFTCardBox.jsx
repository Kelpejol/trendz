import React, {useState} from 'react'


// INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../../public/Image";
import { NFTCardTwo } from '@/collectionPage/CollectionIndex';
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';
const AuthorNFTCardBox = ({collectibles, created, like, follower, following}) => {

    const collectibleArray = [
        images.nft_images_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_images_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_images_1,
        images.nft_image_2,
    ]
    const createdArray = [
        images.nft_images_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_images_1,
    ]

    const likeArray = [
        images.nft_images_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_images_1,
        images.nft_image_2
    ]

    const followerArray = [
       {
        background: images.creatorbackground1,
        user: images.user1
       },
        {
        background: images.creatorbackground10,
        user: images.user3
       },
        {
        background: images.creatorbackground2,
        user: images.user2
       },
        {
        background: images.creatorbackground1,
        user: images.user1
       }
    ]

     const followingArray = [
       {
        background: images.creatorbackground1,
        user: images.user1
       },
        {
        background: images.creatorbackground10,
        user: images.user3
       },
        {
        background: images.creatorbackground2,
        user: images.user2
       },
        {
        background: images.creatorbackground1,
        user: images.user1
       }
    ]

  return (
    <div className={Style.AuthorNFTCardBox}>
      {collectibles && 
        <NFTCardTwo  NFTData={collectibleArray}/>
      }
      {
        created &&
        <NFTCardTwo NFTData={createdArray}/>
      }
      {
        like &&
        <NFTCardTwo NFTData={likeArray}/>
      }
       {
        follower && (
            <div className={Style.AuthorNFTCardBox_box}>
               {followerArray.map((el, i) => (
                <FollowerTabCard i={i} el={el}/>
               ))}
           </div>
      )}
      {
        following && (
            <div className={Style.AuthorNFTCardBox_box}>
               {followingArray.map((el, i) => (
                <FollowerTabCard i={i} el={el}/>
               ))}
           </div>
      )}
       {
        following &&
        <FollowerTabCard NFTData={followingArray}/>
      }
    </div>
  )
}

export default AuthorNFTCardBox
