import {
    BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";
import Info from "./view/pages/info/Info";
import Main from "./view/pages/main/Main";
import Dashboard from "./view/pages/dashboard/Dashboard";
import Search from "./view/pages/search/Search";
import { Switch, Route } from "react-router-loading";
import LogIn from "./view/pages/login/Login";
import {ProtectedRoute} from "./route/prodectedRoute/ProdectedRoute";
import Register from "./view/pages/register/Register";
import {Header} from "./view/components/header/Header";



function App() {
    return (
        <Router>
                <Header />
            <Switch>

                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/info">
                    <Info/>
                </Route>
                <Route path="/login" exact component={LogIn} />
                <Route path="/register" exact component={Register} />
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/">
                    <Main/>
                </Route>

            </Switch>
        </Router>
    )
}

export default App;
