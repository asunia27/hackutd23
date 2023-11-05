import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OverviewSC from './screens/overview.jsx'
import NewItemSC from './screens/new-item.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<OverviewSC/>} />
          <Route path='/new' element={<NewItemSC/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App
