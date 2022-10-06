import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, SignIn, SignUp } from './pages'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path='/' exact element={<Home />} />
          <Route  path='/home' exact element={<Home />} />
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/signup" exact element={<SignUp />} />
          
          <Route path="/signup" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App