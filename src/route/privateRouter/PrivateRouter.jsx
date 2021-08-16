import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({Component, path}) => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    if (user === null) return <Redirect to="/login"/>
    return <Route path={path}> <Component/> </Route>
}