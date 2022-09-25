import s from './ModalContainer.module.scss'

export function ModalContainer({ children, onClickModalContainer }) {
  const onClick = () => {
    if (onClickModalContainer) {
      onClickModalContainer()
    }
  }

  return (
    <checkbox className={s.modalContainer} onClick={onClick}>
      {children}
    </checkbox>
  )
}
