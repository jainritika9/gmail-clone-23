import React,{useEffect}from 'react';
import './App.css';
import Header from "./Header.js"
import Sidebar from "./Sidebar.js"
import Mail from "./Mail.js"
import Sidesection from './Sidesection'
import EmailList from "./EmailList.js"
import SendMail from './SendMail.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {auth} from './firebase';
import {useSelector,useDispatch} from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser,login } from './features/userSlice';
import Login from './Login.js';
function App() {
  const sendMessageIsOpen =useSelector(selectSendMessageIsOpen);
  const user= useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }));
      }
      else{

      }
    })
  },[])
  return (
    <Router>
     {!user ?(<Login/>):(
    <div className="App">
        <Header/>
        <div className='app-body'>
        <Sidebar/>
        <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
          
        </Switch>
        <Sidesection/>
        </div>
        { sendMessageIsOpen && <SendMail/>}
    </div>
     )}
    </Router>
  );
}

export default App;
