import axios from 'axios';
import apiClient from '.';

const domain = 'fake-domain';
const resource = 'fake-resource';

const baseClient = apiClient(domain);
const crudderResource = baseClient<FooData>(resource);
const { get, getById, post, put, delete: deleteResource } = crudderResource;

interface FooData {
    foo: string;
}

const mockFooData: FooData = {
    foo: 'bar',
};

jest.mock('axios');

describe('Crudder creation tests', () => {
    it('WHEN I call the crudder function THEN return a crudder object', () => {
        expect(crudderResource).toBeDefined();
    });

    it('WHEN I call the crudderResource function THEN should contain all the related actions', () => {
        expect(get).toBeDefined();
        expect(getById).toBeDefined();
        expect(post).toBeDefined();
        expect(put).toBeDefined();
        expect(deleteResource).toBeDefined();
    });
});

describe('Crudder get tests', () => {
    it('WHEN I call the crudderResource.get function THEN should return a valid result', async () => {
        const params = {
            foo: 'bar',
        };

        const response = [mockFooData];

        axios.get = jest.fn().mockResolvedValue({ data: response });
        const result = await get(params);
        expect(result).toEqual(response);
    });

    it('WHEN I call the crudderResource.getById function THEN should return a valid result', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: mockFooData });
        const result = await getById('1');
        expect(result).toEqual(mockFooData);
    });
});

describe('Crudder post tests', () => {
    it('WHEN I call the crudderResource.post function THEN should return a valid result', async () => {
        axios.post = jest.fn().mockResolvedValue({ data: mockFooData });
        const result = await post(mockFooData);
        expect(result).toEqual(mockFooData);
    });
});

describe('Crudder put tests', () => {
    it('WHEN I call the crudderResource.put function THEN should return a valid result', async () => {
        axios.put = jest.fn().mockResolvedValue({ data: mockFooData });
        const result = await put('1', mockFooData);
        expect(result).toEqual(mockFooData);
    });
});

describe('Crudder delete tests', () => {
    it('WHEN I call the crudderResource.delete function THEN should return a valid result', async () => {
        axios.delete = jest.fn().mockResolvedValue({ statusText: 'status 200' });
        const result = await deleteResource('1');
        expect(result).toEqual('status 200');
    });
});
