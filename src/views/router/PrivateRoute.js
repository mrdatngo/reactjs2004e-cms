import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux'

function PrivateRoute({ children, isLoggedIn,...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return isLoggedIn ? children : <Redirect to="/login" />;
            }}
        ></Route>
    );
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps)(PrivateRoute);