import axios, { AxiosError } from 'axios';

interface ResourceActions<T> {
    get: (params?: { [key: string]: string }) => Promise<T[] | T | AxiosError>;
    getById: (id: string) => Promise<T | AxiosError>;
}

const executeAction = async <T>(action: () => Promise<T | AxiosError>): Promise<T | AxiosError> => {
    try {
        return await action();
    } catch (error) {
        return error as AxiosError;
    }
};

const crudder =
    (domain: string) =>
    <T>(resource: string): ResourceActions<T> => {
        const url = `${domain}/${resource}`;
        return {
            get: async (params?: { [key: string]: string }): Promise<T[] | T | AxiosError> =>
                executeAction<T[] | T>(async () => (await axios.get(url, { params })).data),
            getById: async (id: string): Promise<T | AxiosError> =>
                executeAction<T>(async () => (await axios.get(`${url}/${id}`)).data),
        };
    };

export default crudder;
