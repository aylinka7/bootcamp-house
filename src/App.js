import {Header} from "./view/components/header/Header";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Auth from  "./view/pages/auth/Auth"
import Dashboard from "./view/pages/dashboard/Dashboard";
import Search from "./view/pages/search/Search";
import Info from "./view/pages/info/Info";
import Main from "./view/pages/main/Main";
import { Switch, Route } from "react-router-loading";
import {mockServer} from "./api/mock-server";
import AddHouse from "./view/pages/addHouse/AddHouse";


function App() {

    return (
        <Router>
                <Header />
            <Switch>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/info">
                    <Info/>
                </Route>
                <Route path="/login">
                    <Auth />
                </Route>
                <Route path="/addhouse">
                    <AddHouse />
                </Route>
                <Route exact path="/">
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
