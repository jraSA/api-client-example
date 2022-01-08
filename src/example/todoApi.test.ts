import { getAllPosts, getPostById } from './todoApi';
import { Post } from './todoApi.interfaces';

describe('todoAPI integration tests', () => {
    xit('WHEN I call getAllPosts THEN should return a valid result', async () => {
        const result = await getAllPosts();
        expect((result as Post[]).length).toEqual(100);
    });

    fit('WHEN I call getPostById THEN should return a valid result', async () => {
        const result = await getPostById('1');
        expect((result as Post[]).length).toEqual(1);
    });
});
