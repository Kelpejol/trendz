import React, {useState} from 'react'
import Image from "next/image";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from 'react-icons/ti';

//  INTERNAL IMPORT
import Style from "./AuthorTabs.module.css";

const AuthorTabs = ({
  setCollectibles, 
  setCreated,
  setLike,
  setFollower, 
  setFollowing
}) => {
    const [openList, setOpenList] = useState(false);
    const [activeBtn, setActiveBtn] = useState(0);
    const [selectedMenu, setSelectedMenu] = useState("Most Recent");

    const listArray = [
      "Created By Admin",
      "Most Appreciated",
      "Most Discussed",
      "Most Viewed"
    ]

    const openDropDownList = () => {
      if(!openList){
        setOpenList(true);
      }else{
        setOpenList(false);
      }
    }

    const openTab = (e) => {
      const btnText = e.target.innerText;
      if(btnText == "Collectibles"){
        setCollectibles(true);
        setCreated(false);
        setFollower(false);
        setFollowing(false);
        setLike(false);
        setActiveBtn(1);
      } else if(btnText == "Created"){
        setCollectibles(false);
        setCreated(true);
        setFollower(false);
        setFollowing(false);
        setLike(false);
        setActiveBtn(2);
    } else if(btnText == "Liked"){
        setCollectibles(false);
        setCreated(false);
        setFollower(false);
        setFollowing(false);
        setLike(true);
        setActiveBtn(3);
    } else if(btnText == "Following"){
        setCollectibles(false);
        setCreated(false);
        setFollower(false);
        setFollowing(true);
        setLike(false);
        setActiveBtn(4);
  }
  else if(btnText == "Followers"){
        setCollectibles(false);
        setCreated(false);
        setFollower(true);
        setFollowing(false);
        setLike(false);
        setActiveBtn(5);
  }
}
  return (

    
    <div className={Style.AuthorTabs}>
      <div className={Style.AuthorTabs_box}>
        <div className={Style.AuthorTabs_box_left}>
          <div className={Style.AuthorTabs_box_left_btn}>
            <button
            className={`${activeBtn == 1 ? Style.active : " "}`}
            onClick={(e) => openTab(e)}>
              Collectibles{" "}
            </button>
             <button
            className={`${activeBtn == 2 ? Style.active : " "}`}
            onClick={(e) => openTab(e)}>
              Created{" "}
            </button>
             <button
            className={`${activeBtn == 3 ? Style.active : " "}`}
            onClick={(e) => openTab(e)}>
              Like{" "}
            </button>

             <button
            className={`${activeBtn == 4 ? Style.active : " "}`}
            onClick={(e) => openTab(e)}>
              Following{" "}
            </button>
             <button
            className={`${activeBtn == 5 ? Style.active : " "}`}
            onClick={(e) => openTab(e)}>
              Follower{" "}
            </button>
          </div>
        </div>
        <div className={Style.AuthorTabs_box_right}>
          <div className={Style.AuthorTabs_box_right_para}
            onClick={() => openDropDownList()}>
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
          </div>

          {openList && (
            <div className={Style.AuthorTabs_box_right_list}>
              {listArray.map((el, i) => (
                <div key={i + 1} onClick={() => setSelectedMenu(el)} className={Style.AuthorTabs_box_right_list_item}>
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick/>}</span>
                </div>
              ))}
              </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AuthorTabs
