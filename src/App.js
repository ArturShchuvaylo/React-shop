import React from 'react';
import Home from './routes/home';
import Navigation from './routes/navigation';
import { Routes, Route } from 'react-router-dom'
import SignIn from './routes/sign-in/sign-in';
import Shop from './routes/shop';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />

        <Route path='sign-in' element={<SignIn />} />
      </Route>

    </Routes>
  )
}

export default App;
