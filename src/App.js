import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContanier from "./components/Dialogs/DialogsContanier";
import UsersContanier from "./components/Users/UsersContanier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initiakisationThunkCreator} from "./redux/App-reducer";
import Prealoder from "./components/Common/Ptrealoder";
import SettingsContainer from "./components/Settings/SettingsContainer";


class App extends Component {

    componentDidMount() {
        this.props.initialisation()




    }

    render() {
        if (!this.props.itIsInitialisation) {
            return <Prealoder/>

        }

        return (


            <div className="app-wrapper">

                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs/:userId?" render={() => <DialogsContanier  />}/>
                    <Route path="/profile/:userid?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={SettingsContainer}/>
                    <Route path="/users" render={() => <UsersContanier/>}/>
                    <Route path="/login" render={() => <Login/>}/>


                </div>


            </div>

        );


    }
}


const mapStateToProps = (state) => {
    return {
        itIsInitialisation: state.app.itIsInitialisation
    }
};

export default  compose (
    withRouter,
    connect (mapStateToProps, {initialisation: initiakisationThunkCreator} )) (App);

