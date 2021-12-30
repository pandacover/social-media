import { useState } from "react";
import styles from "./Auth.module.css";
import { useDispatch } from 'react-redux';
import Button from '../../components/Button/Button';
import { loginUser } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const initialState = { email: "", password: "" };
// const pass_regex = /(^[a-zA-Z]+)([0-9@|-|_|.a-zA-Z]+)/;
// const mail_regex = /(^[a-z]+)([0-9a-z]+)?(@(gmail.com|yahoo.com))$/;

const Login = () => {
    const [credentials, setCredentials] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(credentials, history));

    }

    const handleChange = (e) => setCredentials({...credentials, [e.target.name]: e.target.value});

    return (
        <div className={`flex ${styles.container}`}>
            <div className={`flex ${styles.section1} ${styles.signInSection}`}>
                <p>
                    <span>Sign In</span>
                </p>
                <form className="flex" onSubmit={handleSubmit}>
                    <input  className={styles.email}
                        required
                        name="email"
                        type="text" 
                        onChange={handleChange} 
                        value={credentials.email}
                        placeholder="Email*" />
                    <input className={styles.password}
                        required
                        name="password"
                        type="password" 
                        onChange={handleChange} 
                        value={credentials.password}
                        placeholder="Password*" />
                    <Button className={styles.btn}
                        type="submit"
                        btnStyle="primary" btnSize="large">Sign In</Button>
                </form>
            </div>
            <div className={`flex ${styles.section2}`}>
                <p>
                    <span>Hello, Friend!</span>
                </p>
                <p>
                    <span>Don't have an account? Sign Up and share your memories with the community!</span>
                </p>
                <Button
                    type="navigation"
                    btnStyle="outline"
                    btnSize="medium"
                    route="/auth/register"
                >Sign Up</Button>
            </div>
        </div>
)};

export default Login;