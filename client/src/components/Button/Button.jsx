import './styles.css';
import history from '../History/History';

const Button = (props) => {
    const { btnStyle, btnSize } = props;
    const btn_STYLES = ["primary", "outline"];
    const btn_SIZES = ["small", "medium", "large"];

    const classStyle = btn_STYLES.includes(btnStyle) ? btnStyle : btn_STYLES[0];
    const classSize = btn_SIZES.includes(btnSize) ? btnSize : btn_SIZES[0];


    const routes = (target) => {
        if(props.type === "navigation") {
            history.push(target);
            window.location.reload();
        }

        else return;
    }

    return (
        <button 
        onClick={() => routes(props.route)} 
        className={`btn ${classStyle} ${classSize}`}>{props.children}</button>
)};

export default Button;