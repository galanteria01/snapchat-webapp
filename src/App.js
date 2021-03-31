import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Preview from './Preview'
import Chats from './Chats.jsx'
import Login from './Login.jsx'
import ChatView from './ChatView'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './Firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      }else{
        dispatch(logout)
      }
    })
  })

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Switch>
              <Route exact path="/chats/view">
                <ChatView />
              </Route>
              <Route exact path="/chats">
                <Chats />
              </Route>
              <Route exact path="/preview">
                <Preview />
              </Route>
              <Route exact path="/">
                <WebcamCapture />
              </Route>
            </Switch>
          </div>
        )}
        
      </Router>
    </div>
  );
}

export default App;
