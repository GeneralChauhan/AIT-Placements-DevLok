
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import CompList from './components/compniesHomepage/companyPage';
import Sidebar from './components/SideBar/sidebar'

import Form from './components/Login/AdminLogin'
import Register from './components/Register/Register';

import AddCompany from './components/addCompany/tpo';



function App() {
  return (
    // <div className="App">
    //   <Route exact path="/login" component={Form}/>
    //   {/* <Route exact path="/Dashboard">
    //     <div className="mainPage">
    //       <Sidebar/>
    //       <CompList/>
    //     </div>

    //   </Route> */}
    //   <Route exact path="/profile" component={Profile}/>
    //   {/* <Route exact path="/notice" component={NoticeEditor}/>
    //   <Route exact path="/notice" component={NoticeEditor}/>
    //   <Route exact path="/notice" component={NoticeEditor}/>  */}
    // </div>
    
    <Router>
      <Switch>
        <Route path = "/register">
          <Register/>
        </Route>
        
        <Route path = "/profile">
        </Route>
        <Route path = "/" exact>
          <Form/>
        </Route>
        <Route path = "/dashboard" exact>
          <div className="mainPage">
          <Sidebar /> 
          <CompList />
          </div>
        </Route>
        <Route path = '/addNotice'>
          <AddCompany/>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
