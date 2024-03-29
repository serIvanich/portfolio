import { projectApi } from '../api/projectApi'

export const SET_STATUS = 'APP/SET-STATUS'
export const SET_ERROR = 'APP/SET-ERROR'
export const SET_ON_SCROLL = 'APP/SET-ON-SCROLL'

export const appReducer = (state, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status }

    case SET_ERROR:
      return { ...state, error: action.error }

    case SET_ON_SCROLL:
      return { ...state, onScroll: action.onScroll }

    default:
      return state
  }
}

export const actions = {
  setStatus(status) {
    return { type: SET_STATUS, status }
  },
  setOnScroll(onScroll) {
    return { type: SET_ON_SCROLL, onScroll }
  },
  setError(error) {
    return { type: SET_ERROR, error }
  },
}

export const sendMessage = async (data, dispatch) => {
  try {
    dispatch(actions.setStatus('loading'))
    dispatch(actions.setOnScroll(false))
    const res = await projectApi.sendMessage(data)

    if (res === 'ok') {
      dispatch(actions.setStatus('gmail-success'))
    } else {
      dispatch(actions.setError('network wrong'))
      dispatch(actions.setStatus('gmail-error'))
    }
  } catch (e) {
    dispatch(actions.setError(e))
    dispatch(actions.setStatus('gmail-error'))
  }
}

// finally {
//   dispatch(actions.setStatus('success'))
//   dispatch(actions.setOnScroll(true))
// }
