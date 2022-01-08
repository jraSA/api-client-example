import { AxiosError } from 'axios';
import crudder from '../crudder';
import { Post } from './todoApi.interfaces';

const TODO_DOMAIN = 'https://jsonplaceholder.typicode.com';
const POSTS_RESOURCE = 'posts';

const todoClient = crudder(TODO_DOMAIN);
const postsResource = todoClient<Post>(POSTS_RESOURCE);

const { get: getPosts } = postsResource;

const getAllPosts = (): Promise<AxiosError | Post[] | Post> => getPosts();
const getPostById = (id: string): Promise<AxiosError | Post[] | Post> => getPosts({ id });

export { getAllPosts, getPostById };
