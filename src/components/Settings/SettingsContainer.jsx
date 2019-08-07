import React, {Component} from 'react';
import {connect} from "react-redux";
import Settings from "./Settings";
import {compose} from "redux";
import {WithAthREdirect} from "../HOC/RedirectComponent";
import {withRouter} from "react-router-dom";


class SettingsContainer extends Component {
    render() {
        return (
           <Settings {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default compose (
connect (mapStateToProps),withRouter, WithAthREdirect) (SettingsContainer);