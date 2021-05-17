import {Division} from '../constants/Division';
import {Conference} from '../constants/Conference';

export default class TeamUtil {

    static findDivisionsByConference(conference: string): Division[] {
        let divisions: Division[] = [];

        if (conference === Conference.EAST) {
            divisions = [Division.ATLANTIC, Division.CENTRAL, Division.SOUTHEAST];
        } else if (conference === Conference.WEST) {
            divisions = [Division.NORTHWEST, Division.PACIFIC, Division.SOUTHWEST];
        }

        return divisions;
    }
}
