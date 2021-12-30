import { useSelector } from "react-redux";

const Posts = () => {
    const selector = useSelector(state => state.post);
    console.log(selector);
    return (
        <h2>Hello Bois! This is Posts...</h2>
    )};

export default Posts;