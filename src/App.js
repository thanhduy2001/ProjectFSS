import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';

import Login from './formLogin/Login';
import Main from './homePage/Main';
import PrivateRoute from './Component/privateRoute/privateRoute';

function App() {
  const isLogin = localStorage.getItem('isLogined')
  // lay ra index so 3 /Main
  const href = window.location.href.split('/')[window.location.href.split('/').length - 1]
  // console.log(window.location.href.split('/'));
  useEffect(() => {
      if(isLogin === 'false' && href !== ''){
        const a = window.location.href = '/';
        return a
      }
  },[isLogin,href])


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/Main" element={
            <PrivateRoute>
              <Main />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
