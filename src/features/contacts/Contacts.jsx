import s from './Contacts.module.scss'
import { Title } from '../../common/component/Title/Title'
import { ContactsForm } from './ContactsForm'

export const Contacts = (props) => {
  return (
    <div className={s.contactsBlock} id='contacts'>
      <div className={s.contactsContainer}>
        <Title title='Contacts' />
        <ContactsForm {...props} />
      </div>
    </div>
  )
}
