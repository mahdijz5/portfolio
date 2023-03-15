import { ThemeProvider } from '@mui/material'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { theme } from './configs/theme'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'


function App() {

  return (

      <MainLayout>
          <Routes>
          <Route path="/" Component={Home} />
          </Routes>
      </MainLayout>  )
}

export default App
