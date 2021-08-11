import {Header} from "./views/components/header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Auth from "./views/pages/auth/Auth";
import Dashboard from "./views/pages/dashboard/Dashboard";
import Detail from "./views/pages/detail/Detail";
import Info from "./views/pages/info/Info";
import Main from "./views/pages/main/Main";

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
