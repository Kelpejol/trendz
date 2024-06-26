import React from 'react';
import "./globals.css";

// INTERNAL IMPORT


import Style from "./page.module.css";
import {
    HeroSection, 
    Service, 
    BigNFTSlider, 
    Subscribe, 
    Title, 
    Category, 
    Filter,
    NFTCard,
    Collection,
    AudioLive,
    FollowerTab,
    Slider,
    Brand,
   
} from "../components/componentsindex";

const MyApp = () => (


    <div className={Style.homePage}>
        <HeroSection/>
        <Service/>
        <BigNFTSlider/>
        <Title heading="Latest Audio Collection" 
        paragraph="Discover the most outstanding NFTs in all topics of life."/>
        <AudioLive/>
        <Title heading="New Collection" 
        paragraph="Discover the most outstanding NFTs in all topics of life."/>
        <FollowerTab/>
        <Slider/>
        <Collection/>
        <Title heading="Featured NFTs" 
        paragraph="Discover the most outstanding NFTs in all topics of life."/>
        <Filter/>
        <NFTCard/>
        <Title heading="Browse by category" 
        paragraph="Explore the NFTs in the most featured categories."/>
        <Category/>
        <Subscribe/>
        <Brand/>
       
    </div>

);
export default MyApp; 