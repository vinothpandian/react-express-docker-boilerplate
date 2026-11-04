import React from 'react'
import { hydrate } from 'react-dom'

import HelloWorld from './components/helloWorld'

hydrate(
  <HelloWorld />,
  document.getElementById('app')
)
