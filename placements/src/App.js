
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CompList from './components/compniesHomepage/companyPage';
import Sidebar from './components/SideBar/sidebar'

import AdminLogin from './components/Login/AdminLogin'
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';


function App() {
  return (
    
    <Router>
      <Switch>
        <Route path = "/register">
          <Register/>
        </Route>
        
        <Route path = "/profile">
          <Profile/>
        </Route>
        <Route path = "/login">
          <AdminLogin/>
        </Route>
        <Route path = "/" exact>
          <div>
          <Sidebar/> 
          <CompList/>
        
          
          </div>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
