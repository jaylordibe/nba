import {GenericObject} from '../models/GenericObject';
import HttpUtil from '../utils/HttpUtil';
import {Teams} from '../models/Teams';
import {Response} from '../models/Response';
import {Team} from '../models/Team';

export default class TeamService {

    /**
     * Create team.
     * @param payload
     */
    static create(payload: GenericObject): Promise<Team> {
        return HttpUtil.post('/teams', payload);
    }

    /**
     * Get teams.
     * @param params
     *     string conference (optional)
     *     string division (optional)
     *     string search (optional)
     */
    static get(params = {}): Promise<Teams> {
        return HttpUtil.get('/teams', params);
    }

    /**
     * Get team by id.
     * @param id
     */
    static getById(id: number): Promise<Team> {
        return HttpUtil.get(`/teams/${id}`);
    }

    /**
     * Update team info.
     * @param id
     * @param payload
     */
    static update(id: number, payload: GenericObject): Promise<Team> {
        return HttpUtil.put(`/teams/${id}`, payload);
    }

    /**
     * Delete team.
     * @param id
     */
    static delete(id: number): Promise<Response> {
        return HttpUtil.delete(`/teams/${id}`);
    }
}
