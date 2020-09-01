import React from 'react'
import './App.scss'
import { AppProvider } from './context'
import Users from './components/Users'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Users />
    </AppProvider>
  )
}

export default App
