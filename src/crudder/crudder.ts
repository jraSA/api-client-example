import axios, { AxiosError } from 'axios';

interface ResourceActions<T> {
    get: (params?: { [key: string]: string }) => Promise<T[] | T | AxiosError>;
    getById: (id: string) => Promise<T | AxiosError>;
    post: (data: T) => Promise<T | AxiosError>;
    put: (id: string, data: T) => Promise<T | AxiosError>;
    delete: (id: string) => Promise<string | AxiosError>;
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
            post: async (data: T): Promise<T | AxiosError> =>
                executeAction<T>(async () => (await axios.post(url, data)).data),
            put: async (id: string, data: T): Promise<T | AxiosError> =>
                executeAction<T>(async () => (await axios.put(`${url}/${id}`, data)).data),
            delete: async (id: string): Promise<string | AxiosError> =>
                executeAction<string>(async () => (await axios.delete(`${url}/${id}`)).statusText),
        };
    };

export default crudder;
