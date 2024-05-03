// import { useState } from 'react'

import { Home } from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginPage/>}/>
      </Routes>
  )
}

export default App
