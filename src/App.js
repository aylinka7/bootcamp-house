import {Header} from "./view/components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Auth from "./view/pages/auth/Auth";
import Dashboard from "./view/pages/dashboard/Dashboard";
import Detail from "./view/pages/detail/Detail";
import Info from "./view/pages/info/Info";
import Main from "./view/pages/main/Main";

function App() {
  return (
    <Router>
        <div >
            <Header />
        </div>
        <Switch>
            <Route path="/auth">
                <Auth />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
            <Route path="/detail">
                <Detail />
            </Route>
            <Route path="/info">
                <Info />
            </Route>
            <Route exact path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
