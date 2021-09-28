
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CompList from './components/compniesHomepage/companyPage';
import Sidebar from './components/SideBar/sidebar'

import Form from './components/Login/AdminLogin'

import Profile from './components/Profile/Profile';
import PreviewBar from './components/previewSection/previewBar';
import AddCompany from './components/addCompany/tpo';
import Upload from './components/upload/Upload';
import NoticeEditor from './components/addCompany/components/noticeEditor';


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
               
        <Route path = "/profile">
        </Route>
        <Route path = "/">
          <Form/>
        </Route>
        <Route path = "/dashboard" exact>
          <div className="mainPage">
          <Sidebar /> 
          <CompList />
          {/* <Upload/> */}

          
          {/* <PreviewBar/> */}
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
