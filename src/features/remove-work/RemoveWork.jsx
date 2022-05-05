import React from 'react'
import s from './RemoveWork.module.scss'
import { Link} from "react-scroll";

export const RemoveWork = () => {

    return (
        <div className={s.removeWorkBlock}>
            <div className={s.removeWorkContainer}>
                <h2 className={s.title}>I am considering options for remote work</h2>
                
                <Link
                  className={s.linkOffRemoveWork}
                  to="contacts"
                  spy={true}
                  smooth={true}
                  duration={3000}
                >
                    message me
                </Link>
                
            </div>
        </div>
    )
}