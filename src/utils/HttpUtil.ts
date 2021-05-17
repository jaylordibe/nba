import axios, {AxiosResponse} from 'axios';
import {GenericObject} from '../models/GenericObject';

export default class HttpUtil {

    /**
     * Compose full API endpoint.
     * @param endpoint
     */
    static composeApiEndpoint(endpoint: string): string {
        return process.env.REACT_APP_API_URL?.concat(endpoint) || '';
    }

    /**
     * Get additional request headers.
     */
    static getRequestHeaders(): GenericObject {
        const token = localStorage.getItem('token');

        return {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
    }

    /**
     * Compose endpoint with params if defined.
     * @param endpoint
     * @param params
     */
    static composeEndpointWithParams(endpoint: string, params: GenericObject): string {
        const paramKeys = Object.keys(params);

        if (paramKeys.length > 0) {
            const queryString = paramKeys.map(key => key + '=' + params[key]).join('&');

            if (queryString) {
                endpoint = endpoint.concat('?').concat(queryString);
            }
        }

        return endpoint;
    }

    /**
     * Perform GET http request.
     * @param endpoint
     * @param params
     */
    static async get<T>(endpoint: string, params = {}): Promise<T> {
        const config = {headers: this.getRequestHeaders()};
        endpoint = this.composeEndpointWithParams(endpoint, params);
        const url = this.composeApiEndpoint(endpoint);
        const response: AxiosResponse<T> = await axios.get<T>(url, config);

        return response.data;
    }

    /**
     * Perform POST http request.
     * @param endpoint
     * @param payload
     */
    static async post<T>(endpoint: string, payload = {}): Promise<T> {
        const config = {headers: this.getRequestHeaders()};
        const url = this.composeApiEndpoint(endpoint);
        const response: AxiosResponse<T> = await axios.post(url, payload, config);

        return response.data;
    }

    /**
     * Perform PUT http request.
     * @param endpoint
     * @param payload
     */
    static async put<T>(endpoint: string, payload = {}): Promise<T> {
        const config = {headers: this.getRequestHeaders()};
        const url = this.composeApiEndpoint(endpoint);
        const response: AxiosResponse<T> = await axios.put(url, payload, config);

        return response.data;
    }

    /**
     * Perform DELETE http request.
     * @param endpoint
     */
    static async delete<T>(endpoint: string): Promise<T> {
        const config = {headers: this.getRequestHeaders()};
        const url = this.composeApiEndpoint(endpoint);
        const response: AxiosResponse<T> = await axios.delete(url, config);

        return response.data;
    }
}
