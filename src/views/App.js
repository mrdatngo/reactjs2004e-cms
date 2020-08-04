import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DefaultLayout from "./layouts/DefaultLayout";
import AddStudent from "./components/AddStudent";
import ListStudent from "./components/ListStudent";
import PrivateRoute from './router/PrivateRoute';
import routes from '../routes'

function App() {
    return (
        <Router>
            {/* header */}
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home Page</Link>
                    </li>
                    <li>
                        <Link to="/login">Login Page</Link>
                    </li>
                </ul>
            </nav> */}
            {/* main */}
            <Switch>
                <Route exact path="/login">
                    <LoginPage></LoginPage>
                </Route>
                {/* <Route path="/add-student">
                    <DefaultLayout>
                        <AddStudent />
                    </DefaultLayout>
                </Route>
                <Route path="/students">
                    <DefaultLayout>
                        <ListStudent />
                    </DefaultLayout>
                </Route> */}
                <PrivateRoute path="/">
                    <DefaultLayout routes={routes}>
                        {/* <Switch>
                            <Route path="/add-student">
                                <AddStudent />
                            </Route>
                            <Route path="/students">
                                <ListStudent />
                            </Route>
                        </Switch> */}
                    </DefaultLayout>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
