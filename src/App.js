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
import HouseId from "./view/components/houseId/HouseId";
import AddHouse from "./view/pages/addHouse/AddHouse";
import Login from "./view/pages/login/Login";
import {PrivateRoute} from "./route/privateRouter/PrivateRouter";


function App() {

    return (
        <Router>
                <Header />
            <Switch>
                <PrivateRoute path="/addhouse" Component={AddHouse} />
                    {/*<Route path="/addhouse">*/}
                    {/*    <AddHouse />*/}
                    {/*</Route>*/}
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/info">
                    <Info/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Main/>
                </Route>

                <Route path="/house/:id" exact>
                    <HouseId />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
