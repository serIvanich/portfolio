import cnBind from 'classnames/bind'
import s from './Title.module.scss'

const cx = cnBind.bind(s)

export function Title({ title }) {
  const mainTitle = title === 'web developer'
  const className = cx('title', { titleMain: mainTitle })
  return <h2 className={className}>{title}</h2>
}
