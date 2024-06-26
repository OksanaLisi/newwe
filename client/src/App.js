import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import './App.scss';



function App() {
  const {login, logout, token, userId, isReady} = useAuth()
  const isLogin = !!token 
  const routes = useRoutes(isLogin)


  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
      <div className="app">
      <BrowserRouter>
       <Navbar />
       <BurgerMenu/>
       { routes }
      </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
