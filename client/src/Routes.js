import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import SigninSeller from './pages/SigninSeller';
import SignupSeller from './pages/SignupSeller';
import SignupType from './pages/SignupType';
import SignupCustomer from './pages/SignupCustomer';
import Type from "./pages/SignupType";
import SigninType from "./pages/SigninType";
import SigninCustomer from "./pages/SigninCustomer";
function Routes(){
    return(
        <div>
<Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route  path="/signinType">
        <SigninType/>
    </Route>
    <Route exact path="/signupType">
        <SignupType/>
    </Route>
</Switch>


<Switch>
    <Route exact path="/Home">
        <SignupType/>
    </Route>
    <Route path="/signupSeller">
        <SignupSeller/>
    </Route>
    <Route path="/signupCustomer">
        <SignupCustomer/>
    </Route>
</Switch>
<Switch>
    <Route exact path="/Home">
        <SignupType/>
    </Route>
    <Route path="/signinSeller">
        <SigninSeller/>
    </Route>
    <Route path="/signinCustomer">
        <SigninCustomer/>
    </Route>
</Switch>
</div>
    );
    
}
export default Routes;