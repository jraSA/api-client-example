import { createPost, deletePost, editPost, getAllPosts, getPostById } from './todoApi';
import { Post } from './todoApi.interfaces';

describe('todoAPI integration tests', () => {
    const mockPost: Post = {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    };

    xit('WHEN I call getAllPosts THEN should return a valid result', async () => {
        const result = await getAllPosts();
        expect((result as Post[]).length).toEqual(100);
    });

    xit('WHEN I call getPostById THEN should return a valid result', async () => {
        const result = await getPostById('1');
        const { id } = result as Post;
        expect(id).toEqual(1);
    });

    xit('WHEN I call createPost THEN should return a valid result', async () => {
        const result = await createPost(mockPost);
        const { id } = result as Post;
        expect(id).toEqual(101);
    });

    xit('WHEN I call editPost THEN should return a valid result', async () => {
        const result = await editPost('1', mockPost);
        const { id } = result as Post;
        expect(id).toEqual(1);
    });

    xit('WHEN I call deletePost THEN should return a valid result', async () => {
        const result = await deletePost('1');
        expect(result).toEqual('OK');
    });
});
