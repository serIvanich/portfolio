import React from 'react';
import s from './ModalContainer.module.scss'

export const ModalContainer = ({children, onClickModalContainer}) => {

  const onClick = () => {
    if (onClickModalContainer) {
      onClickModalContainer()
    }
  }

  return (
    <div className={s.modalContainer} onClick={onClick}>

      {children}
    </div>

  )
}

