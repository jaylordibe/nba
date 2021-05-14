import axios from 'axios';
import {GenericObject} from '../models/GenericObject';

export default class HttpUtil {

    /**
     * Compose full API endpoint.
     * @param endpoint
     * @returns {string}
     */
    static composeApiEndpoint(endpoint: string) {
        return process.env.REACT_APP_API_URL?.concat(endpoint) || '';
    }

    /**
     * Get additional request headers.
     * @returns {{Authorization: string, "Content-Type": string}}
     */
    static getRequestHeaders() {
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
     * @returns {*}
     */
    static composeEndpointWithParams(endpoint: string, params: GenericObject) {
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
     * @returns {Promise}
     */
    static async get(endpoint: string, params = {}) {
        const config = {headers: this.getRequestHeaders()};
        endpoint = this.composeEndpointWithParams(endpoint, params);
        const url = this.composeApiEndpoint(endpoint);
        const response = await axios.get(url, config);

        return response.data;
    }

    /**
     * Perform POST http request.
     * @param endpoint
     * @param payload
     * @returns {Promise}
     */
    static async post(endpoint: string, payload = {}) {
        const config = {headers: this.getRequestHeaders()};
        const url = this.composeApiEndpoint(endpoint);
        const response = await axios.post(url, payload, config);

        return response.data;
    }

    /**
     * Perform PUT http request.
     * @param endpoint
     * @param payload
     * @returns {Promise}
     */
    static async put(endpoint: string, payload = {}) {
        const config = {headers: this.getRequestHeaders()};
        const url = this.composeApiEndpoint(endpoint);
        const response = await axios.put(url, payload, config);

        return response.data;
    }

    /**
     * Perform DELETE http request.
     * @param endpoint
     * @returns {Promise}
     */
    static async delete(endpoint: string) {
        const config = {headers: this.getRequestHeaders()};
        const url = this.composeApiEndpoint(endpoint);
        const response = await axios.delete(url, config);

        return response.data;
    }
}
