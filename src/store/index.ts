import { applyMiddleware, createStore } from 'redux'

function logger({ getState, dispatch }){
  console.log('logger')
  return (next) => (action) => {
    // console.log(getState)
    // console.log(dispatch)
    // console.log(next)
    console.log('before dispatch', getState())
    const dispatch = next(action)

    console.log(dispatch)
    console.log('after dispatch', getState())

    return dispatch
  }
}

const reducer = (state: any, action) => {
  switch(action.type){
    case "count_change":
      return { ...state, count: action.data }
  }
  return state
}

const store = applyMiddleware(logger)(createStore)(reducer)

export default store

