/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/react'
import './styles/reset.css'
import './styles/global.css'
import IndexPage from './components/page/IndexPage'

function App() {
  return (
    <div className="App">
      <IndexPage />
    </div>
  )
}

export default App
