import styles from "./Auth.module.css";
import { useState } from "react";
import Button from '../../components/Button/Button';
import { createUser } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const initialState = { username: "", email: "", password: "", confirmPassword: "" };
const mail_regex = /(^[a-z]+)([0-9a-z]+)?(@(gmail.com|yahoo.com))$/;
const pass_regex = /(^[a-zA-Z]+)([0-9@|-|_|.a-zA-Z]+)/;

const Register = () => {
    const [credentials, setCredentials] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const mail = e.target.querySelector('input[type="email"]').value;
        const pass = e.target.querySelector('input[type="password"]').value;

        if(mail_regex.test(mail) && pass_regex.test(pass)) {
            console.log(credentials);
            dispatch(createUser(credentials, history));
        }
        else console.log("Regex Mismatched")
    }

    const handleChange = (e) => setCredentials({...credentials, [e.target.name]: e.target.value});

    return (
        <div className={`flex ${styles.container}`}>
            <div className={`flex ${styles.section1}`}>
                <p>
                    <span>Create an Account</span>
                </p>
                <form className="flex" onSubmit={handleSubmit}>
                    <input className={styles.name}
                        autoFocus
                        required
                        name="username"
                        type="text"
                        onChange={handleChange}
                        value={credentials.username}
                        placeholder="Username*" />
                    <input className={styles.email}
                        required
                        type="email"
                        name="email"
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
                    <input className={styles.password}
                        required
                        name="confirmPassword"
                        type="password" 
                        onChange={handleChange} 
                        value={credentials.confirmPassword}
                        placeholder="Confirm password*" />
                    <Button className={styles.btn}
                        type="submit"
                        btnStyle="primary" btnSize="large">Sign Up</Button>
                </form>
            </div>
            <div className={`flex ${styles.section2}`}>
                <p>
                    <span>Welcome Back!</span>
                </p>
                <p>
                    <span>To keep connected with us please login to your account!</span>
                </p>
                <Button
                    type="navigation"
                    btnStyle="outline"
                    btnSize="medium"
                    route="/auth/login"
                >Sign In</Button>
            </div>
        </div>
)};

export default Register;