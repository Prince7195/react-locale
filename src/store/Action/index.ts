import { ActionTypes } from "../../Modal";

export const Init = (payload: any) => {
    return {
        type: ActionTypes.INIT,
        payload
    }
}