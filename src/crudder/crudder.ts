import axios, { AxiosError } from 'axios';

interface ResourceActions<T> {
    get: (params?: { [key: string]: string }) => Promise<T[] | T | AxiosError>;
    getById: (id: string) => Promise<T | AxiosError>;
}

const crudder =
    (domain: string) =>
    <T>(resource: string): ResourceActions<T> => {
        const url = `${domain}/${resource}`;
        return {
            get: async (params?: { [key: string]: string }): Promise<T[] | T | AxiosError> => {
                try {
                    const response = await axios.get(url, { params });
                    return response.data;
                } catch (error) {
                    return error as AxiosError;
                }
            },
            getById: async (id: string): Promise<T | AxiosError> => {
                try {
                    const response = await axios.get(`${url}/${id}`);
                    return response.data;
                } catch (error) {
                    return error as AxiosError;
                }
            },
        };
    };

export default crudder;
