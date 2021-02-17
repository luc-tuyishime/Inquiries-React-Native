import { inquiriesActionsTypes } from "../../actions-types";
import { apiAction } from "../../../helpers";

export default () => (dispatch) =>
    dispatch(
        apiAction({
            method: "get",
            url: "/5c41920e0f0000543fe7b889",
            onStart: inquiriesActionsTypes.GET_INQUIRIES_START,
            onEnd: inquiriesActionsTypes.GET_INQUIRIES_END,
            onSuccess: inquiriesActionsTypes.GET_INQUIRIES_SUCCESS,
            onFailure: inquiriesActionsTypes.GET_INQUIRIES_FAILURE
        })
    );
