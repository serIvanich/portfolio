import { useEffect, useReducer } from 'react'
import s from './App.module.scss'
import { Header } from './features/header/Header'
import { Skills } from './features/skills/Skills'
import { Main } from './features/main/Main'
import { Projects } from './features/projects/Projects'
import { RemoveWork } from './features/remove-work/RemoveWork'
import { Contacts } from './features/contacts/Contacts'
import { Footer } from './features/footer/Footer'
import { appReducer, actions, sendMessage } from './bll/app-reducer'
import Preloader from './common/component/preloader/Preloader'
import { ModalContainer } from './common/component/modal-view/ModalContainer'

const appStatus = {
  idea: 'idea',
  success: 'success',
  loading: 'loading',
  gmailSuccess: 'gmail-success',
  gmailError: 'gmail-error',
}

export const App = () => {
  const initialState = {
    status: appStatus.idea,
    onScroll: true,
    error: null,
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  const { status, onScroll } = state
  const appLoading = status === appStatus.loading

  // after you sent me email
  const gmailSuccessMessage = `
        You sent the letter for me, thank you! I will answer you necessary.`
  const gmailErrorMessage = `
        Sorry, but something went wrong! 
        ${state.error ? state.error : '????'}`

  const showModal =
    !onScroll &&
    (status === appStatus.loading ||
      status === appStatus.gmailSuccess ||
      status === appStatus.gmailError)

  useEffect(() => {
    if (!onScroll) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflowY = 'auto'
    }
  }, [onScroll])

  const submitForm = (data) => {
    sendMessage(data, dispatch)
  }

  const changeAppScroll = (value) => {
    dispatch(actions.setOnScroll(value))
  }

  const closeModalContainer = () => {
    dispatch(actions.setStatus('success'))
    dispatch(actions.setOnScroll(true))
  }

  return (
    <div className={s.app}>
      {showModal && (
        <ModalContainer>
          {status === appStatus.loading && <Preloader />}
          {status === appStatus.gmailSuccess && (
            <GmailPromise
              message={gmailSuccessMessage}
              closeModalContainer={closeModalContainer}
            />
          )}
          {status === appStatus.gmailError && (
            <GmailPromise
              message={gmailErrorMessage}
              closeModalContainer={closeModalContainer}
            />
          )}
        </ModalContainer>
      )}

      <Header changeScroll={changeAppScroll} />
      <Main />
      <Skills />
      <Projects />
      <RemoveWork />
      <Contacts submitForm={submitForm} disabled={appLoading} />
      <Footer />
    </div>
  )
}

const GmailPromise = ({ message, closeModalContainer }) => {
  return (
    <div className={s.modalBox}>
      <div>{message}</div>
      <div>
        <button type='button' onClick={closeModalContainer}>
          CLICK TO CLOSE
        </button>
      </div>
    </div>
  )
}
