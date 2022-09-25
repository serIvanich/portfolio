import s from './ModalContainer.module.scss'

export function ModalContainer({ children, onClickModalContainer }) {
  const onClick = () => {
    if (onClickModalContainer) {
      onClickModalContainer()
    }
  }

  return (
    <div className={s.modalContainer} onClick={onClick} aria-hidden='true'>
      {children}
    </div>
  )
}
