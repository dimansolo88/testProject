import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter, Switch} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContanier from "./components/Users/UsersContanier";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initiakisationThunkCreator, showAndHideGlobalErrors} from "./redux/App-reducer";
import Prealoder from "./components/Common/Ptrealoder";
import {getNewMessagesCount} from "./redux/Selectors/AppSelector";
import {newCountThunkCreator} from "./redux/dialogs-reducer";
import {WithSuspense} from "./components/HOC/WithSuspense";
import NotFount from "./components/Common/NotFount404";
// this components to be lazy loading
const DialogsContanier = React.lazy(() => import('./components/Dialogs/DialogsContanier'));
const SettingsContainer = React.lazy(() => import( "./components/Settings/SettingsContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));


class App extends Component {
    catchRejectPromise(pr) {
        this.props.showAndHideGlobalErrors(pr)
    }

    componentDidMount() {
        this.props.initialisation();
        // this.props.newMessagesCount()
        this.props.newMessagesCount()
        window.addEventListener("unhandledrejection", this.catchRejectPromise.bind(this))

    }


    componentWillUnmount() {
        // this.props.newMessagesCount()
        window.removeEventListener("unhandledrejection", this.catchRejectPromise.bind(this))
    }

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
                {this.props.globalError && <div className="notification"> {this.props.globalError} </div>}
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path="/" exact render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs/:userId?" render={WithSuspense(DialogsContanier)}/>
                        <Route path="/profile/:userid?" render={() => <ProfileContainer/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={WithSuspense(SettingsContainer)}/>
                        <Route path="/users" render={() => <UsersContanier/>}/>
                        <Route path="/login" render={WithSuspense(Login)}/>
                        <Route path="*" render={() => <NotFount/>}/>
                    </Switch>

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
        globalError:state.app.globalError,
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {
        initialisation: initiakisationThunkCreator,
        newMessagesCount: newCountThunkCreator, showAndHideGlobalErrors
    }))(App);

