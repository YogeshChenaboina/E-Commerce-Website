import React from 'react'
import './FooterCss.css'
import { RiYoutubeLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci"
import { FiShoppingCart } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";
import { MdPrivacyTip } from "react-icons/md";
const Footer = () => {
  return (
    <div className='foot'>
      <div className='sub1'>
      <div>
      <RiYoutubeLine className='icon'/>
      <SlSocialTwitter className='icon'/>
      <CiInstagram className='icon'/>
      <FiShoppingCart className='icon'/>
      <LuFacebook className='icon'/>
      <ImPinterest2 className='icon'/>
      </div>
      <div>
        <a>Social media directory</a>
      </div>
            </div> 
      <div className='sub2'>
            <div className='span'>
            <span>Privacy</span>
            <span>Interest Based Ads</span>
            <span>Terms & Conditions</span>
            <span>CA Privacy Rights</span>
            <span>Team member services</span>
            </div>
            <div>
            <MdPrivacyTip/>Your Privacy Choices
            </div>
            <div>
            ©2024 ApnaShop Brands, Inc. ApnaShop, the Bullseye Design and Bullseye Dog are trademarks of Apnashop, Inc.
            </div>
      </div>
    </div>
  )
}

export default Footer
