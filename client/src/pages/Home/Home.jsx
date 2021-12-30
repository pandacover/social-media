import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPost } from '../../actions/posts';
import { Cards } from '../../components';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPost()).then(res => setPosts(res));
    },[dispatch])
    return (
        <div className={styles.container}>
                {posts.map((res, index) => 
                    <div key = {index}>
                        <Cards content={res} />
                        <br />
                    </div>
                )}
        </div>
    )
}

export default Home;
