import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeOne from './Components/HomeOne';
import HomeTwo from './Components/HomeTwo';
import HeaderOne from './Components/Header/HeaderOne';
import HeaderTwo from './Components/Header/HeaderTwo';
import FooterOne from './Components/Footer/FooterOne';
import About from './Components/Page/About';
import ServiceDetails from './Components/Page/ServiceDetails';
import DentistDetails from './Components/Page/DentistDetails';
import Blog from './Components/Page/Blog';
import Contact from './Components/Page/Contact';
import ContactTwo from './Components/Page/ContactTwo';
import Team from './Components/Page/Team';
import BlogDetails from './Components/Page/BlogDetails';
import FooterData from './Components/Data/FooterData';
import SignIn from './Components/SignIn/signIn';
import SignUp from './Components/SignUp/signUp';
import Contra from './Components/Contra/contra';
import Dashboard from './Components/Admin/Dashboard';
import MaybeShowNavBar from './Components/MaybeShowNavBar/MaybeShowNavBar';
import './App.css';

function App() {
  return (
    
    <div className="main-wrapper">
      <Router>
       <Switch>
       <Route exact path='/Admin/Dashboard' component={Dashboard} />
       </Switch>
       <MaybeShowNavBar>
        <HeaderOne />
        {/* <HeaderTwo /> */}
        </MaybeShowNavBar>
        <Route exact path='/' render={props => (
          <React.Fragment>
            <HomeOne />
            {/* <HomeTwo /> */}
          </React.Fragment>
        )} />
        
        <Route path='/Page/About' component={About} />
        <Route path='/Page/ServiceDetails' component={ServiceDetails} />
        <Route path='/Page/DentistDetails' component={DentistDetails} />
        <Route path='/Page/BlogDetails' component={BlogDetails} />
        <Route path='/Page/Blog' component={Blog} />
        <Route path='/Page/Team' component={Team} />
        <Route path='/Page/Contact' component={Contact} />
        <Route path='/Page/ContactTwo' component={ContactTwo} />
        <Route path='/SignIn/signIn' component={SignIn} />
        <Route path='/SignUp/signUp' component={SignUp} />        
        <Route path='/Contra/contra' component={Contra} />        

        <MaybeShowNavBar>
		    <FooterOne FooterData={FooterData} />
        </MaybeShowNavBar>
      </Router>
    </div>
  );
}

export default App;
