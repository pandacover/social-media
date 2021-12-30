import * as api from '../api';

export const getPost = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
        return data;

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (newPost, history) => async(dispatch) => {
    try {
        const { data } = await api.createPost(newPost);
        dispatch({ type: 'CREATE', payload: data });
        history.push("/home");
        window.location.reload();
    } catch (error) {
        console.log(error.message);
    }
}