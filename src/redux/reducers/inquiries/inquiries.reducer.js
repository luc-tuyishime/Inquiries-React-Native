import { inquiriesActionsTypes } from "../../actions-types";

export default (state, { type, payload }) => {
    switch (type) {
        case inquiriesActionsTypes.GET_INQUIRIES_START:
            return {
                ...state,
                fetchInquiries: {
                    ...state.fetchPosts,
                    message: "",
                    loading: true,
                    errors: {}
                }
            };
        case inquiriesActionsTypes.GET_INQUIRIES_END:
            return {
                ...state,
                fetchInquiries: {
                    ...state.fetchPosts,
                    loading: false
                }
            };
        case inquiriesActionsTypes.GET_INQUIRIES_SUCCESS:
            return {
                ...state,
                listOfInquiries: payload?.dataList,
                fetchInquiries: {
                    loading: false,
                    message: payload.message,
                    errors: {}
                }
            };
        case inquiriesActionsTypes.GET_INQUIRIES_FAILURE:
            return {
                ...state,
                fetchInquiries: {
                    loading: false,
                    message: "",
                    errors: payload.errors
                }
            };
        default:
            return null;
    }
};
