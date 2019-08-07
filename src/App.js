import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
// import Profile from "./components/Profile/Profile";
// import Dialogs from "./components/Dialogs/Dialogs";
import {Route, withRouter} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
// import Sitebar from "./components/Navbar/Sitebar/Sitebar";
import DialogsContanier from "./components/Dialogs/DialogsContanier";
import UsersContanier from "./components/Users/UsersContanier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {auhMeThunkCreator} from "./redux/Auth-reducer";
import {compose} from "redux";
// import Sitebar from './components/Navbar/Sitebar/Sitebar';


class App extends Component {

    componentDidMount() {

        this.props.authMe()

    }

    render() {


        return (


            <div className="app-wrapper">

                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs" render={() => <DialogsContanier/>}/>
                    <Route path="/profile/:userid?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users" render={() => <UsersContanier/>}/>
                    <Route path="/login" render={() => <Login/>}/>


                </div>


            </div>

        );


    }
}


export default  compose (
    withRouter,
    connect (null, {authMe:auhMeThunkCreator} )) (App);

