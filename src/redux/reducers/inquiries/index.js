import { inquiries as initialState } from "../../store/initialState";

import requestInquiries from "./inquiries.reducer";

export default (state = initialState, action) => {
    const getInquiries = requestInquiries(state, action);

    return getInquiries || state;
};
