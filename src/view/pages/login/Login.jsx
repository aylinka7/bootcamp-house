import Css from './login.module.css'
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useState} from "react";
import {useHistory} from "react-router-dom"

function Login(){
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const submit = (e) => {
        e.preventDefault();
        if (login === "giyaz" && password === "123456") {
            localStorage.setItem("user", JSON.stringify({login, accesToken: "qwerty123456"}))
            history.push("/addhouse")
        }
    }
    return (
        <form onSubmit={submit} className={Css.root}>
            <h1>Authentication</h1>
            <TextField value={login} onChange={(e) => setLogin(e.target.value)} id="outlined-basic" label="Login" variant="outlined"/>
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" type="password" variant="outlined"/>
            <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>
    );
}

export default Login