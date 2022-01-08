import axios from 'axios';
import crudder from '.';

const domain = 'fake-domain';
const resource = 'fake-resource';

interface FooData {
    foo: string;
}

jest.mock('axios');

describe('Crudder creation tests', () => {
    const baseClient = crudder(domain);
    const crudderResource = baseClient<FooData>(resource);

    it('WHEN I call the crudder function THEN return a crudder object', () => {
        expect(crudderResource).toBeDefined();
    });

    it('WHEN I call the crudderResource function THEN should contain a get function', () => {
        expect(crudderResource.get).toBeDefined();
    });

    it('WHEN I call the crudderResource.get function THEN should return a valid result', async () => {
        const params = {
            foo: 'bar',
        };

        const response = [
            {
                foo: 'bar',
            },
        ];

        axios.get = jest.fn().mockResolvedValue({ data: response });
        const result = await crudderResource.get(params);
        expect(result).toEqual(response);
    });
});
