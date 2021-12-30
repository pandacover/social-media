import styles from './Navbar.module.css';
import { Button } from '..';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../action_types/types';
import history from '../History/History';

const Navbar = () => {
    const tag="</>"
    const dispatch = useDispatch();

    const Logout = (e) => {
        dispatch({type: LOGOUT});
        history.push("/auth/login");
        window.location.reload();
    }
    return(
        <nav className={`flex ${styles.navbar}`}>
            <div className={`flex ${styles.container1}`}>
                <p className={styles.name}>{tag} The Social Media App</p>   
            </div>
            <div className={`flex ${styles.container2}`}>
                {   localStorage.length < 1 ? 
                    <>
                    <div>
                        <Button 
                        btnStyle="primary" 
                        btnSize="medium"
                        route="/auth/login"
                        type="navigation">Login</Button>
                    </div>
                    <div>
                        <Button 
                        btnStyle="outline" 
                        btnSize="medium"
                        route="/auth/register"
                        type="navigation">Register</Button>
                    </div>
                    </> :
                    <div>
                        <button 
                        className="btn medium primary"
                        onClick = {Logout}
                        type="navigation">Logout</button>
                    </div>}
            </div>
        </nav>
)};

export default Navbar;