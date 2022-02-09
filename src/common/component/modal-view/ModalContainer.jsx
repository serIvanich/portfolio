import React from 'react';
import s from './ModalContainer.module.scss'

export const ModalContainer = ({children}) => {

  return (
    <div className={s.modalContainer}>

      {children}
    </div>

  )
}

