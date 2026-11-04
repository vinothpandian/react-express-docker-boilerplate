import React from 'react'
import { hydrate, render } from 'react-dom'

import HelloWorld from './components/helloWorld'

const target = document.getElementById('app')
const renderApp = target.firstElementChild ? hydrate : render

renderApp(
  <HelloWorld />,
  target
)
