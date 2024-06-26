import React from 'react'
import {HiOutlineMail} from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy} from "react-icons/md";
import { 
TiSocialFacebook,
TiSocialTwitter,
TiSocialInstagram
 } from 'react-icons/ti';

// INTERNAL IMPORT
import Style from "./Form.module.css"
import { Button } from "../../components/componentsindex";
const Form = () => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
            <div className={Style.Form_box_input}>
                <label htmlFor='name'>Username</label>
                <input type="text" placeholder='Olukayode paul'
                className={Style.Form_box_input_userName}/>
            </div>

            <div className={Style.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}>
                        <HiOutlineMail/>
                    </div>
                    <input type='text' placeholder='Email'/>
                </div>
            </div>
            <div className={Style.Form_box_input}>
                <label htnlFor="description"></label>
                <textarea name='' id="" cols={30} rows={6} placeholder='say
                something about yourself in few words'></textarea>
            </div>
            <div className={Style.Form_box_input}>
                <label htmlFor='website'>Websites</label>
                <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                    <MdOutlineHttp/>
                </div>

                <input type='text' placeholder='websites'/>
            </div>
            </div>

            <div className={Style.Form_box_input_box_social}>
                <div className={Style.Form_box_input}>
                    <label htmlFor="facebook">Facebook</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <TiSocialFacebook/>
                        </div>
                        <input type="text" placeholder='http://paul ' />
                    </div>
                </div>
                <div className={Style.Form_box_input_box_social}>
                <div className={Style.Form_box_input}>
                    <label htmlFor="Twitter">Twitter</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <TiSocialTwitter/>
                        </div>
                        <input type="text" placeholder='http://paul ' />
                    </div>
                </div>
            </div>
            <div className={Style.Form_box_input_box_social}>
                <div className={Style.Form_box_input}>
                    <label htmlFor="Instagram">Instagram</label>
                    <div className={Style.Form_box_input_box}>
                        <div className={Style.Form_box_input_box_icon}>
                            <TiSocialInstagram/>
                        </div>
                        <input type="text" placeholder='http://paul ' />
                    </div>
                </div>
            </div>
            </div>

            <div className={Style.Form_box_input}>
                <label htmlFor='wallet'>Wallet address</label>
                <div className={Style.Form_box_input_box}>
                    <div className={Style.Form_box_input_box_icon}> 
                    <MdOutlineHttp/>
                    </div>
                    <input type='text' 
                    placeholder='0xEAGJFKIKJDZJZJ676889'
                    />
                    <div className={Style.Form_box_input_box_icon}>
                        <MdOutlineContentCopy/>
                    </div>
                </div>
            </div>
            <div className={Style.Form_box_btn}>
                <Button btnName="Upload profile" handleClick={()=> {}}
                classStyle={Style.button}
                />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
