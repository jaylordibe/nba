import {GenericObject} from '../models/GenericObject';
import HttpUtil from '../utils/HttpUtil';

export default class TeamService {

    /**
     * Create team.
     * @param payload
     */
    static create(payload: GenericObject): GenericObject {
        return HttpUtil.post('/teams', payload);
    }

    /**
     * Get teams.
     * @param params
     *     string conference (optional)
     *     string division (optional)
     *     string search (optional)
     */
    static get(params: GenericObject): GenericObject {
        return HttpUtil.get('/teams', params);
    }

    /**
     * Get team by id.
     * @param id
     */
    static getById(id: number): GenericObject {
        return HttpUtil.get(`/teams/${id}`);
    }

    /**
     * Update team info.
     * @param id
     * @param payload
     */
    static update(id: number, payload: GenericObject): GenericObject {
        return HttpUtil.put(`/teams/${id}`, payload);
    }

    /**
     * Delete team.
     * @param id
     */
    static delete(id: number): GenericObject {
        return HttpUtil.delete(`/teams/${id}`);
    }
}
