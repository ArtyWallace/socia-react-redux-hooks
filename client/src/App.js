import React from 'react';
import './App.scss';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Wrapper } from './components/Wrapper/Wrapper';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Messages } from './components/Messages/Messages';
import { Users } from './components/Users/Users';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
