import { FETCH_ALL, CREATE } from '../action_types/types';

const posts = (post = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...post, action.payload];
        default:
            return post;
    }
}

export default posts;