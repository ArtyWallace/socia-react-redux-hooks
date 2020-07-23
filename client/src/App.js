import React from 'react';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Wrapper } from './components/Wrapper/Wrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Messages } from './components/Messages/Messages';
import { Users } from './components/Users/Users';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token, userId, login, logout } = useAuth();
  const isAuth = !!token;


  return (
    <div className="App">
      <AuthContext.Provider value={{ token, userId, login, logout, isAuth }}>
        <BrowserRouter>
          <Sidebar />
          <Wrapper>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/messages' >
              <Messages />
            </Route>
            <Route path='/users' >
              <Users />
            </Route>
          </Wrapper>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
