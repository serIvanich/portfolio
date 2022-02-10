import React from 'react'
import s from './Title.module.scss'
import cnBind from 'classnames/bind'

const cx = cnBind.bind(s)

export const Title = (props) => {
    const mainTitle = props.title==='web developer'
    const className = cx('title',{titleMain: mainTitle })
    return (
        
            <h2 className={className}>{props.title}</h2>
        
        
    )

}
