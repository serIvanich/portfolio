import s from './Footer.module.scss'
import gitImg from '../../assets/image/git_logo.png'
import telegramImg from '../../assets/image/telegram_logo.png'
import linkendinImg from '../../assets/image/linkendin_logo.png'
import { projectLinks } from '../../assets/links/project-links'

export function Footer() {
  const { myGithub } = projectLinks
  return (
    <div className={s.footerBlock}>
      <div className={s.footerContainer}>
        <div className={s.infoBlock}>
          <h4 className={s.footerName}>Serhii Kachurin</h4>
          <InfoRow title='tel' value='80664424348' />
          <InfoRow title='email' value='serivan1108@gmail.com' />
        </div>

        <div className={s.footerNav}>
          <IconLink link={gitImg} goTo={myGithub} />
          <IconLink link={telegramImg} />
          <IconLink link={linkendinImg} />
        </div>
        <span className={s.footerEnd}>@2021 All rights reserved</span>
      </div>
    </div>
  )
}

function InfoRow({ title, value }) {
  return (
    <div className={s.infoRow}>
      <div className={s.infoRowTitle}>{title}</div>
      <div className={s.infoRowValue}>{value}</div>
    </div>
  )
}

function IconLink({ link, goTo = '' }) {
  return (
    <div className={s.link}>
      <a href={goTo}>
        <img src={link} alt='git' />
      </a>
    </div>
  )
}
