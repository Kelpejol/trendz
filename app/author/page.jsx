"use client"
import React, {useState, useEffect} from 'react';

// INTERNAL IMPORT
import Style from "./author.module.css";
import {Banner, NFTCardTwo} from "../../collectionPage/CollectionIndex";
import FollowerTabCard from '@/components/FollowerTab/FollowerTabCard/FollowerTabCard';
import  {Brand, Title} from "../../components/componentsindex";
import images from "../../public/Image"
import {AuthorProfileCard, AuthorTabs, AuthorNFTCardBox} from "../../AuthorPage/authorIndex" 

const author = () => {

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

    const [collectibles, setCollectibles] = useState(true);
    const [created, setCreated] = useState(false);
    const [like, setLike] = useState(false);
    const [follower, setFollower] = useState(false);
    const [following, setFollowing] = useState(false);
  return (
    <div className={Style.author}>
      <Banner bannerImage={images.creatorbackground2}/>
      <AuthorProfileCard/>
      <AuthorTabs 
      setCollectibles={setCollectibles} 
      setCreated={setCreated} 
      setLike={setLike}
      setFollower={setFollower}
      setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
      collectibles={collectibles}
      created={created}
      like={like}
      follower={follower}
      following={following}
      />
      <Title
      heading="Popular creators"
      paragraph="click on music icon and enjoy NFT music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((el, i)=> (
         <FollowerTabCard i={i} el={el}/>
        ))}
      </div>

      <FollowerTabCard/>
      <Brand/>
    </div>
  )
}

export default author
