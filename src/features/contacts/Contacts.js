import React from 'react'
import s from './Contacts.module.scss'
import {Title} from "../../common/component/Title";


export const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title title={'Contacts'} />
                <form className={s.contactsForm}>
                    <input className={s.input}/>
                    <input className={s.input}/>
                    <textarea className={s.textarea}/>


                </form>
                <button className={s.contactsButton}>SEND</button>
            </div>
        </div>
    )
}