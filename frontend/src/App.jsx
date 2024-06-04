import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'

export default function App() {
  return (
    <div className="mx-4">
      <Header/>
    <Outlet />
    </div>
  )
}
