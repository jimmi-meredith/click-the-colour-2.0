import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers,
  // this is how we wire in the devtools in the browser (also important)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    // passing the sotre as props into provider so it can be used in everything in the app
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
