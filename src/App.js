import {Header} from "./view/components/header/Header";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Auth from "./view/pages/auth/Auth";
import Dashboard from "./view/pages/dashboard/Dashboard";
import Search from "./view/pages/search/Search";
import Info from "./view/pages/info/Info";
import Main from "./view/pages/main/Main";
import { Switch, Route } from "react-router-loading";


function App() {

    return (
        <Router>
                <Header />
            <Switch>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/info">
                    <Info/>
                </Route>
                <Route exact path="/">
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App