import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:5000" });


export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);

export const createUser = (userData) => API.post("/auth/registerUser", userData);
export const loginUser = (userData) => API.post("/auth/loginUser", userData);
