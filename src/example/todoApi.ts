import crudder from '../crudder';
import { Post } from './todoApi.interfaces';

const TODO_DOMAIN = 'https://jsonplaceholder.typicode.com';
const POSTS_RESOURCE = 'posts';

const todoClient = crudder(TODO_DOMAIN);
const postsResource = todoClient<Post>(POSTS_RESOURCE);

const { get: getAllPosts, getById: getPostById, post: createPost, put: editPost, delete: deletePost } = postsResource;

export { getAllPosts, getPostById, createPost, editPost, deletePost };
