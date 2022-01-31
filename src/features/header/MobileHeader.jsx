import React from "react";
import s from './Header.module.scss'
import {Nav} from '../nav/Nav'

export const MobileHeader = () => {

  return (
    <div className={s.mobileHeaderContainer}>

      <Nav/>
    </div>
  )
}