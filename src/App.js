import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContanier from "./components/Users/UsersContanier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initiakisationThunkCreator} from "./redux/App-reducer";
import Prealoder from "./components/Common/Ptrealoder";
// import SettingsContainer from "./components/Settings/SettingsContainer";
import {getNewMessagesCount} from "./redux/Selectors/AppSelector";
import {newCountThunkCreator} from "./redux/dialogs-reducer";
import {WithSuspense} from "./components/HOC/WithSuspense";
// this components to be lazy loading
const DialogsContanier = React.lazy(() => import('./components/Dialogs/DialogsContanier'));
const SettingsContainer = React.lazy(() => import( "./components/Settings/SettingsContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));




class App extends Component {

    componentDidMount() {
        this.props.initialisation();
        // this.props.newMessagesCount()
        this.props.newMessagesCount()

    }


    // componentWillUnmount() {
    //     this.props.newMessagesCount()
    //
    //
    // }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     setInterval(() => {
    //         this.props.newMessagesCount()
    //     }, 10000)
    // }


    render() {
        if (!this.props.itIsInitialisation) {
            return <Prealoder/>

        }

        return (


            <div className="app-wrapper">
                {this.props.messagesCount > 0 &&
                <div className="notification"> new message: {this.props.messagesCount}  </div>}
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/dialogs/:userId?" render={WithSuspense(DialogsContanier)}/>
                    <Route path="/profile/:userid?" render={() => <ProfileContainer/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() =>  <Music/>}/>
                    <Route path="/settings" render={WithSuspense (SettingsContainer)}/>
                    <Route path="/users" render={() => <UsersContanier/>}/>
                    <Route path="/login" render={WithSuspense(Login)}/>


                </div>


                {/*<SiteTemplate header={() => { return  <div>security</div>}}  mainContent={() => <input />} />*/}


            </div>

        );


    }
}


const mapStateToProps = (state) => {
    return {
        itIsInitialisation: state.app.itIsInitialisation,
        messagesCount: getNewMessagesCount(state),
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {
        initialisation: initiakisationThunkCreator,
        newMessagesCount: newCountThunkCreator
    }))(App);

