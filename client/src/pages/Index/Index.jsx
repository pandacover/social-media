import styles from './Index.module.css';
import Button from '../../components/Button/Button';

const Index = () => {
    return (
        <div className={`flex ${styles.container}`}>
            <p className={styles.text}>The Social Media App</p>
            <div>
                <Button type="navigation" route="/auth/login" btnStyle="primary" btnSize="medium">Login</Button>
                <Button type="navigation" route="/auth/register" btnStyle="outline" btnSize="medium">Register</Button>
            </div>
        </div>
)};

export default Index;