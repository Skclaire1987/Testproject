import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';



const App = () => {
  return ( 
  <BrowserRouter>
      <div className='app-wrapper'>
   <Header />
   <Navbar />
   <div class='app-wrapper-content'>
    <Route path='/dialog' component={Dialog} />
    <Route path='/profile' component={Profile} />  
    </div>
</div>
</BrowserRouter>)
}

export default App;