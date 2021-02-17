import axios from "axios";
import * as urlHelper from "./urlHelper";

const { reactUrl } = urlHelper.backend;

export default (data = {}) => {
    const { URL } = data;
    const baseURL = URL || (reactUrl && `${reactUrl}`);

    return axios.create({ baseURL });
};
