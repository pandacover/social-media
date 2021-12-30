import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import { Button } from '..';
import styles from './Form.module.css';
import { useHistory } from 'react-router-dom';

const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData, history));
    };

    return (
        <>
            <form 
            className={`flex ${styles.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <textarea 
                placeholder='CREATOR'
                className={`${styles.formData} ${styles.creator}`} name="creator" label="Creator" onChange={e => setPostData({...postData, creator: e.target.value})} value={postData.creator}></textarea>
                <textarea 
                placeholder='TITLE'
                className={`${styles.formData} ${styles.title}`} name="title" label="Title" onChange={e => setPostData({...postData, title: e.target.value})} value={postData.title}></textarea>
                <textarea 
                placeholder='MESSAGE'
                className={`${styles.formData} ${styles.message}`} name="message" label="Message" onChange={e => setPostData({...postData, message: e.target.value})} value={postData.message}></textarea>
                <textarea 
                placeholder='TAGS'
                className={`${styles.formData} ${styles.tags}`} name="tags" label="Tags" onChange={e => setPostData({...postData, tags: e.target.value})} value={postData.tags}></textarea>
                <Button 
                className={styles.formBtn} btnSize="medium" btnStyle="primary" type="submit">Submit</Button>
            </form>
        </>
)};

export default Form;